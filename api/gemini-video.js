import { spawn } from 'node:child_process';

export const config = { api: { bodyParser: { sizeLimit: '1mb' } } };
const run = (args) => new Promise((resolve, reject) => {
  const p = spawn('yt-dlp', args); const out = []; const err = [];
  p.stdout.on('data', x => out.push(x)); p.stderr.on('data', x => err.push(x));
  p.on('close', code => code ? reject(new Error(Buffer.concat(err).toString().slice(-1200) || 'yt-dlp failed')) : resolve(Buffer.concat(out)));
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });
  const { url, key, model = 'gemini-3.7-flash', prompt } = req.body || {};
  if (!url || !key) return res.status(400).json({ error: 'YouTube URL and Gemini API key are required' });
  try {
    const video = await run(['--no-playlist', '-f', 'best[ext=mp4]/best', '-o', '-', String(url)]);
    if (!video.length) throw new Error('YouTube returned an empty video');
    const upload = await fetch(`https://generativelanguage.googleapis.com/upload/v1beta/files?key=${encodeURIComponent(key)}`, {
      method: 'POST', headers: { 'X-Goog-Upload-Protocol': 'raw', 'X-Goog-Upload-Command': 'upload', 'X-Goog-Upload-Header-Content-Type': 'video/mp4', 'Content-Type': 'video/mp4' }, body: video
    });
    const file = await upload.json();
    if (!upload.ok || !file.file?.name) throw new Error(file.error?.message || 'Gemini video upload failed');
    let state = file.file;
    for (let i = 0; i < 60 && state.state === 'PROCESSING'; i++) { await new Promise(r => setTimeout(r, 2000)); state = await fetch(`https://generativelanguage.googleapis.com/v1beta/${file.file.name}?key=${encodeURIComponent(key)}`).then(r => r.json()); }
    if (state.state !== 'ACTIVE') throw new Error('Gemini could not process the video');
    const body = { contents: [{ role: 'user', parts: [{ file_data: { mime_type: state.mimeType || 'video/mp4', file_uri: state.uri } }, { text: prompt }] }], generationConfig: { temperature: .15, maxOutputTokens: 65536 } };
    const answer = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(key)}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const data = await answer.json();
    if (!answer.ok) throw new Error(data.error?.message || 'Gemini video analysis failed');
    return res.status(200).json({ text: data.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') || '' });
  } catch (e) { return res.status(502).json({ error: e.message || 'Video analysis failed' }); }
}
