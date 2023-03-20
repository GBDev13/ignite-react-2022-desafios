import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { buildNextAuthOptions } from "../auth/[...nextauth]"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if(req.method !== "GET") return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if(!session) return res.status(401).end()

  const latestUserRating = await prisma.rating.findFirst({
    where: {
      user_id: String(session?.user?.id)
    },
    orderBy: {
      created_at: "desc"
    },
    include: {
      book: true
    },
  })

	return res.json({ rating: latestUserRating })
}