import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { buildNextAuthOptions } from "../auth/[...nextauth]"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if(req.method !== "GET") return res.status(405).end()

  const categoryId = req.query.category as string

	const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId
        }
      }
    },
    include: {
      ratings: true
    }
  })

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    _avg: {
      rate: true
    }
  })

  let userBooksIds: string[] = []

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if(session) {
    const userBooks = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: String(session?.user?.id)
          }
        }
      }
    })

    userBooksIds = userBooks?.map(x => x?.id)
  }

  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(avgRating => avgRating.book_id === book.id)
    const { ratings, ...bookInfo } = book
    return {
      ...bookInfo,
      ratings: ratings.length,
      avgRating: bookAvgRating?._avg.rate,
      alreadyRead: userBooksIds.includes(book.id)
    }
  })

	return res.json({ books: booksWithAvgRating })
}