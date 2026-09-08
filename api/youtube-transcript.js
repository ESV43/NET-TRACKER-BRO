// YouTube caption extractor.
// Historical failures ("No YouTube captions are available" / empty track) had
// two root causes, both fixed here:
//  1. The scraped watch-page `baseUrl` has no `fmt` parameter and YouTube
//     answers it with an empty body. Appending `&fmt=srv3` (or `&fmt=vtt`)
//     returns the real transcript. The Innertube ANDROID player API is used
//     as a fallback source whose URLs already carry `fmt=srv3`.
//  2. srv3 transcripts use `<p><s>...</s></p>` nodes, not the legacy
//     `<text>` nodes the old parser looked for, so even a good download
//     parsed to an empty string.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });
  const { url } = req.body || {};
  const id = String(url || '').match(/(?:v=|youtu\.be\/|live\/|shorts\/|embed\/)([A-Za-z0-9_-]{6,})/)?.[1];
  if (!id) return res.status(400).json({ error: 'A valid YouTube URL is required' });

  const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

  const fetchText = async (target, options = {}) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), options.timeoutMs || 20000);
    try {
      const r = await fetch(target, { headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9', ...(options.headers || {}) }, ...(options.fetchInit || {}) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.text();
    } finally {
      clearTimeout(timer);
    }
  };

  // Balanced-bracket extraction: finds `"captionTracks":` then reads the full
  // `[...]` array honouring strings/escapes (a naive /\[.*?\]/ truncates).
  const extractTracksArray = (html) => {
    const key = '"captionTracks":';
    const tracks = [];
    let from = 0;
    while (true) {
      const k = html.indexOf(key, from);
      if (k === -1) break;
      const start = html.indexOf('[', k + key.length);
      if (start === -1) break;
      let depth = 0, inStr = false, esc = false, end = -1;
      for (let i = start; i < html.length && i < start + 200000; i++) {
        const c = html[i];
        if (inStr) {
          if (esc) esc = false;
          else if (c === '\\') esc = true;
          else if (c === '"') inStr = false;
        } else if (c === '"') inStr = true;
        else if (c === '[') depth++;
        else if (c === ']') {
          depth--;
          if (depth === 0) { end = i; break; }
        }
      }
      if (end === -1) break;
      try {
        const parsed = JSON.parse(html.slice(start, end + 1).replace(/\\u0026/g, '&'));
        if (Array.isArray(parsed)) for (const t of parsed) if (t && t.baseUrl) tracks.push(t);
      } catch (_) { /* keep scanning for the next occurrence */ }
      from = end + 1;
    }
    return tracks;
  };

  const dedupeTracks = (list) => {
    const seen = new Set(), out = [];
    for (const t of list) {
      const k = `${t.languageCode}|${t.kind || ''}|${t.baseUrl}`;
      if (!seen.has(k)) { seen.add(k); out.push(t); }
    }
    return out;
  };

  // Preferred order: Innertube URLs first (working signatures), then manual
  // English, auto English, any English variant, original-language track, rest.
  const orderTracks = (list) => {
    const score = (t) => {
      const lang = String(t.languageCode || '').toLowerCase();
      const auto = t.kind === 'asr';
      let s = 0;
      if (lang === 'en' && !auto) s = 0;
      else if (lang === 'en' && auto) s = 1;
      else if (lang.startsWith('en')) s = 2;
      else if (!auto) s = 3;
      else if (/-orig$/.test(lang)) s = 4;
      else if (lang === 'hi') s = 5;
      else s = 6;
      return (t._src === 0 ? 0 : 100) + s;
    };
    return [...list].sort((a, b) => score(a) - score(b));
  };

  const withFmt = (baseUrl, fmt) => {
    if (/[?&]fmt=/.test(baseUrl)) return baseUrl;
    return baseUrl + (baseUrl.includes('?') ? '&' : '?') + `fmt=${fmt}`;
  };

  const decodeEntities = (s) => String(s || '')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => { try { return String.fromCodePoint(parseInt(h, 16)); } catch { return ' '; } })
    .replace(/&#(\d+);/g, (_, n) => { try { return String.fromCodePoint(parseInt(n, 10)); } catch { return ' '; } })
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;|&#x27;/gi, "'").replace(/&nbsp;/g, ' ');

  const cleanLine = (s) => decodeEntities(String(s || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

  // srv3: <p ...><s ...>word</s>...</p>  |  legacy srv1: <text>...</text>  |  vtt
  const parseTranscriptXml = (xml) => {
    if (!xml || !xml.includes('<')) return '';
    const lines = [];
    const push = (x) => { const c = cleanLine(x); if (c) lines.push(c); };
    if (/<p[\s>]/.test(xml)) {
      for (const m of xml.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)) push(m[1]);
    }
    if (!lines.length) {
      for (const m of xml.matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)) push(m[1]);
    }
    if (!lines.length && /^WEBVTT/m.test(xml)) {
      for (const block of xml.split(/\n\s*\n/)) {
        const body = block.split('\n').filter((l) => l && !/^\d+$/.test(l.trim()) && !/-->/u.test(l) && !/^WEBVTT/.test(l) && !/^Kind:|^Language:/.test(l)).join(' ');
        push(body.replace(/<\d{2}:.*$/g, ''));
      }
    }
    // De-duplicate consecutive repeats common in auto-captions.
    const deduped = lines.filter((l, i) => l && l !== lines[i - 1]);
    return deduped.join(' ').replace(/\s+/g, ' ').trim();
  };

  try {
    // 1) Collect caption tracks from every available source.
    // NOTE: watch-page baseUrls are bot-anonymized (dead signature) and
    // return an empty body even with fmt= set, so Innertube URLs must always
    // be collected too and are tried first.
    let tracks = [];
    try {
      const watch = await fetchText(`https://www.youtube.com/watch?v=${id}`, { headers: { Cookie: 'CONSENT=YES+1; SOCS=CAI;' } });
      for (const t of extractTracksArray(watch)) tracks.push({ ...t, _src: 1 });
    } catch (_) { /* fall through to next source */ }
    if (!tracks.length) {
      try {
        const embed = await fetchText(`https://www.youtube.com/embed/${id}`);
        for (const t of extractTracksArray(embed)) tracks.push({ ...t, _src: 1 });
      } catch (_) { /* fall through */ }
    }
    try {
      // Innertube ANDROID client bypasses the consent/bot wall that hides
      // captionTracks on the watch page for datacenter IPs, and its URLs
      // carry working signatures (fmt=srv3 included).
      const player = await fetch('https://www.youtube.com/youtubei/v1/player?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': UA },
        body: JSON.stringify({ videoId: id, context: { client: { clientName: 'ANDROID', clientVersion: '20.10.38', androidSdkVersion: 30, hl: 'en', gl: 'US' } } }),
      }).then((r) => r.json()).catch(() => null);
      const inner = player?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
      if (Array.isArray(inner)) for (const t of inner.filter((t) => t && t.baseUrl)) tracks.push({ ...t, _src: 0 });
    } catch (_) { /* watch-page tracks may still work */ }
    tracks = orderTracks(dedupeTracks(tracks));
    if (!tracks.length) {
      return res.status(404).json({ error: 'No YouTube captions are listed for this video. Use direct Gemini video analysis instead — it does not need captions.' });
    }

    // 2) Download: every track × every format variant until one yields text.
    // NOTE: the bare baseUrl (no fmt) answers with an empty body; fmt=srv3 is
    // the variant that reliably returns content.
    let lastError = null;
    for (const track of tracks.slice(0, 6)) {
      const variants = [withFmt(track.baseUrl, 'srv3'), withFmt(track.baseUrl, 'vtt'), track.baseUrl];
      for (const target of variants) {
        try {
          const xml = await fetchText(target, { timeoutMs: 25000 });
          const text = parseTranscriptXml(xml);
          if (text && text.replace(/\s/g, '').length > 40) {
            return res.status(200).json({ text, language: track.languageCode || 'unknown', kind: track.kind || 'manual' });
          }
          lastError = new Error('The caption track was empty');
        } catch (e) {
          lastError = e;
        }
      }
    }
    throw lastError || new Error('Transcript unavailable');
  } catch (e) {
    const msg = /abort/i.test(e.message || '') ? 'Timed out fetching captions. YouTube may be rate-limiting this network — use direct Gemini video analysis instead.' : (e.message || 'Transcript unavailable');
    const blocked = /HTTP 4\d\d|empty|timed out/i.test(msg);
    return res.status(blocked ? 422 : 502).json({ error: msg });
  }
}
