// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log("Hello from Next.js")
  let resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  resp = await resp.json()

  res.status(200).json({
    message: "Dados colhidos em tempo real pelo servidor do Next.js",
    data:resp
  })
}
