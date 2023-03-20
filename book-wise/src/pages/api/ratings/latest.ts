import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if(req.method !== "GET") return res.status(405).end()

  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: "desc"
    },
    include: {
      book: true,
      user: true
    },
    take: 10
  })

  return res.json({ ratings })
}