// Caption fallback for YouTube videos. This intentionally returns the source
// captions only; the browser sends them to the configured AI provider.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });
  const { url } = req.body || {};
  const id = String(url || '').match(/(?:v=|youtu\.be\/|live\/|shorts\/|embed\/)([A-Za-z0-9_-]{6,})/)?.[1];
  if (!id) return res.status(400).json({ error: 'A valid YouTube URL is required' });
  try {
    const page = await fetch(`https://www.youtube.com/watch?v=${id}`).then(r => r.text());
    const match = page.match(/"captionTracks":(\[.*?\])/);
    if (!match) throw new Error('No YouTube captions are available for this video');
    const tracks = JSON.parse(match[1].replace(/\\u0026/g, '&'));
    const track = tracks.find(x => /^en/i.test(x.languageCode || '')) || tracks[0];
    const xml = await fetch(track.baseUrl).then(r => r.text());
    const text = [...xml.matchAll(/<text[^>]*>([\s\S]*?)<\/text>/g)]
      .map(m => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim())
      .filter(Boolean).join(' ');
    if (!text) throw new Error('The caption track was empty');
    return res.status(200).json({ text, language: track.languageCode || 'unknown' });
  } catch (e) { return res.status(422).json({ error: e.message || 'Transcript unavailable' }); }
}
