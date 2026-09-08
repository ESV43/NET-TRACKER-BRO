import { spawn } from 'node:child_process';

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };

const YT_ID = /(?:v=|youtu\.be\/|live\/|shorts\/|embed\/)([A-Za-z0-9_-]{6,})/;
const FALLBACK_MODELS = ['gemini-2.0-flash', 'gemini-1.5-flash'];

const run = (cmd, args, { timeoutMs = 240000, maxBytes = 300 * 1024 * 1024 } = {}) => new Promise((resolve, reject) => {
  let proc;
  try {
    proc = spawn(cmd, args);
  } catch (e) {
    reject(new Error(`${cmd} is not installed on the server`));
    return;
  }
  const out = [];
  const err = [];
  let size = 0;
  let done = false;
  const timer = setTimeout(() => {
    if (!done) { done = true; try { proc.kill('SIGKILL'); } catch (_) {} reject(new Error(`${cmd} timed out`)); }
  }, timeoutMs);
  proc.on('error', (e) => {
    if (!done) { done = true; clearTimeout(timer); reject(new Error(`${cmd} is not available (${e.code || e.message})`)); }
  });
  proc.stdout.on('data', (x) => {
    size += x.length;
    if (size > maxBytes) {
      if (!done) { done = true; clearTimeout(timer); try { proc.kill('SIGKILL'); } catch (_) {} reject(new Error('Video is too large to process via upload (over 300MB at 360p).')); }
      return;
    }
    out.push(x);
  });
  proc.stderr.on('data', (x) => err.push(x));
  proc.on('close', (code) => {
    if (done) return;
    done = true;
    clearTimeout(timer);
    if (code) reject(new Error(Buffer.concat(err).toString().slice(-1200) || `${cmd} failed`));
    else resolve(Buffer.concat(out));
  });
});

async function geminiGenerateContent({ key, model, parts, maxOutputTokens = 65536 }) {
  const body = {
    contents: [{ role: 'user', parts }],
    generationConfig: { temperature: 0.15, maxOutputTokens },
  };
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) {
    const err = new Error(data.error?.message || `Gemini request failed (HTTP ${r.status})`);
    err.status = r.status;
    throw err;
  }
  if (data.promptFeedback?.blockReason) throw new Error(`Gemini blocked the video (${data.promptFeedback.blockReason})`);
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') || '';
  if (!text) throw new Error('Gemini returned an empty response for this video');
  return text;
}

const isModelNotFound = (e) => {
  if (e?.status === 404) return true;
  return /model.*not (found|supported)|not\.?found.*model|unsupported.*model/i.test(e?.message || '');
};
const isOverloaded = (e) => e?.status === 503 || /overload|high demand|temporarily unavailable|503/i.test(e?.message || '');
// Auth/key/quota problems would fail identically on the upload path, so the
// expensive yt-dlp download must be skipped for them.
const isAuthError = (e) => /API key|API_KEY|key not valid|unauthenticated|permission denied|quota|billing/i.test(e?.message || '');

// Legacy fallback: download a SMALL (<=360p) copy via yt-dlp and upload it
// through the Files API. Only reached when Gemini cannot fetch the YouTube
// URL directly (e.g. private/unlisted video). The old code downloaded
// best[ext=mp4] (gigabytes for one-shot lectures) straight into memory,
// which OOMed or timed out on serverless.
async function analyzeViaUpload({ url, key, model, prompt }) {
  const video = await run('yt-dlp', ['--no-playlist', '-f', 'bv*[height<=360]+ba/b[height<=360]/b/worst', '-o', '-', String(url)]);
  if (!video.length) throw new Error('YouTube returned an empty video');
  const upload = await fetch(`https://generativelanguage.googleapis.com/upload/v1beta/files?key=${encodeURIComponent(key)}`, {
    method: 'POST',
    headers: { 'X-Goog-Upload-Protocol': 'raw', 'X-Goog-Upload-Command': 'upload', 'X-Goog-Upload-Header-Content-Type': 'video/mp4', 'Content-Type': 'video/mp4' },
    body: video,
  });
  const file = await upload.json().catch(() => ({}));
  if (!upload.ok || !file.file?.name) throw new Error(file.error?.message || 'Gemini video upload failed');
  let state = file.file;
  for (let i = 0; i < 45 && state.state === 'PROCESSING'; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    state = await fetch(`https://generativelanguage.googleapis.com/v1beta/${file.file.name}?key=${encodeURIComponent(key)}`).then((r) => r.json());
  }
  if (state.state !== 'ACTIVE') throw new Error('Gemini could not process the uploaded video');
  return geminiGenerateContent({
    key,
    model,
    parts: [
      { file_data: { mime_type: state.mimeType || 'video/mp4', file_uri: state.uri } },
      { text: prompt },
    ],
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });
  const { url, key, model = 'gemini-2.0-flash', prompt } = req.body || {};
  if (!url || !key) return res.status(400).json({ error: 'YouTube URL and Gemini API key are required' });
  const id = String(url).match(YT_ID)?.[1];
  if (!id) return res.status(400).json({ error: 'A valid YouTube URL is required' });
  if (!prompt) return res.status(400).json({ error: 'A prompt is required' });
  // Canonical watch URL: Gemini fetches the video server-side from this URL,
  // so live/share/shorts links are normalized first.
  const canonicalUrl = `https://www.youtube.com/watch?v=${id}`;

  // Primary path: Gemini reads the public YouTube URL directly — no yt-dlp
  // download, no multi-GB buffering, no Files-API upload round-trip.
  const models = [model, ...FALLBACK_MODELS.filter((m) => m !== model)];
  let lastError = null;
  for (const m of models) {
    try {
      const text = await geminiGenerateContent({
        key,
        model: m,
        parts: [{ file_data: { file_uri: canonicalUrl } }, { text: prompt }],
      });
      return res.status(200).json({ text, method: 'youtube-url', model: m });
    } catch (e) {
      lastError = e;
      // Only retry with another model when this model is unavailable; any
      // other error (bad key, blocked video, quota) would repeat identically.
      if (!isModelNotFound(e) && !isOverloaded(e)) break;
    }
  }

  // Fallback path: small re-upload for videos Gemini cannot fetch directly.
  // Skipped for auth/key errors (uploading would fail the same way after a
  // minutes-long download).
  if (lastError && isAuthError(lastError)) {
    return res.status(502).json({ error: lastError.message || 'Video analysis failed' });
  }
  try {
    const text = await analyzeViaUpload({ url: canonicalUrl, key, model: isModelNotFound(lastError) ? FALLBACK_MODELS[0] : model, prompt });
    return res.status(200).json({ text, method: 'upload', model });
  } catch (uploadError) {
    const msg = lastError ? `${lastError.message} (Upload fallback also failed: ${uploadError.message})` : uploadError.message;
    return res.status(502).json({ error: msg || 'Video analysis failed' });
  }
}
