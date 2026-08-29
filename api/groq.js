export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });
  const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', { method:'POST', headers:{Authorization:`Bearer ${process.env.GROQ_API_KEY}`,'Content-Type':'application/json'}, body:JSON.stringify(req.body) });
  return res.status(upstream.status).json(await upstream.json());
}
