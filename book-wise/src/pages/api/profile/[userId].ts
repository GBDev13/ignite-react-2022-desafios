import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if(req.method !== "GET") return res.status(405).end()

  const userId = String(req.query.userId)

	const profile = await prisma.user.findUnique({
    where: {
      id: userId
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true
                }
              }
            }
          }
        },
        orderBy: {
          created_at: "desc"
        }
      }
    }
  })

  const readPages = profile?.ratings.reduce((acc, rating) => acc + rating.book.total_pages, 0);
  const ratedBooks = profile?.ratings.length;
  const readAuthors = profile?.ratings.reduce((acc, rating) => {
    if(!acc.includes(rating.book.author)) {
      acc.push(rating.book.author)
    }
    return acc
  }, [] as string[]);
  
  const categories = profile?.ratings?.flatMap(rating => rating?.book?.categories?.flatMap(category => category?.category?.name))
  const mostReadCategories = Object.entries(categories?.reduce((acc, category) => {
    if(!acc[category]) {
      acc[category] = 1
    } else {
      acc[category]++
    }
    return acc
  }, {} as Record<string, number>) ?? {})

  const mostReadCategory = mostReadCategories?.length <= 0 ? null : mostReadCategories.reduce((a, b) => b[1] > a[1] ? b : a)[0];

  const profileData = {
    user: {
      avatar_url: profile?.avatar_url,
      name: profile?.name,
      member_since: profile?.created_at,
    },
    ratings: profile?.ratings,
    readPages,
    ratedBooks,
    readAuthors: readAuthors?.length,
    mostReadCategory
  }

	return res.json({ profile: profileData })
}