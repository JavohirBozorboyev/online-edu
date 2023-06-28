// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const fe = await fetch(
    "https://onlineedu.pythonanywhere.com/api/examp/free-category/"
  );
  console.log(req);

  const data = await fe.json();
  res.status(200).json(data);
}