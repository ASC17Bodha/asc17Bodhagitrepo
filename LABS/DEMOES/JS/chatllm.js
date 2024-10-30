// apiKey: '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',
// import OpenAI from 'openai';



const OpenAI=require('openai');

const openai = new OpenAI({
  apiKey: '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',
  baseURL: 'https://integrate.api.nvidia.com/v1',
})

async function main() {
  const completion = await openai.chat.completions.create({
    model: "nvidia/llama-3.1-nemotron-70b-instruct",
    messages: [{"role":"user","content":"Write a limerick about the wonders of GPU computing."}],
    temperature: 0.5,
    top_p: 1,
    max_tokens: 1024,
    stream: true,
  })
   
  for await (const chunk of completion) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '')
  }
  
}

main();