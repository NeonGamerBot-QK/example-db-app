// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from './../../lib/prisma.js'
import { Prisma } from "@prisma/client"
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.posts.findMany({})
      return res.status(200).json({ data })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  } else if(req.method === 'POST') {
   try {
    const data =  await prisma.posts.createMany({
      data: [{
        name: req.body.title,
       description: req.body.description,
       date: new Prisma.Decimal(req.body.date),
      }]
    })
    return res.status(200).json({ data })
  } catch (err) {
      console.error(err)
      return res.status(500).json({ err })
    }
  }
  else {
    return res.status(405).json({ msg: 'Method not allowed' })
  }
}
