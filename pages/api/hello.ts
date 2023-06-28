// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function Hello(
  req: NextApiRequest,
  res: NextApiResponse
) {
 const token = req.cookies._token
 
  res.status(200).json({
    token,
  })
}
