export const config={api:{bodyParser:false}};
export default async function handler(req,res){
  if(req.method!=='POST')return res.status(405).json({error:'POST required'});
  const chunks=[];for await(const chunk of req)chunks.push(chunk);
  const upstream=await fetch('https://api.groq.com/openai/v1/audio/transcriptions',{method:'POST',headers:{Authorization:`Bearer ${process.env.GROQ_API_KEY}`,'Content-Type':req.headers['content-type']},body:Buffer.concat(chunks)});
  return res.status(upstream.status).json(await upstream.json());
}
