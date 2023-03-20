import { NextApiRequest, NextApiResponse } from "next"
import { Adapter } from "next-auth/adapters"
import { prisma } from "../prisma"

export function PrismaAdapter(
  req: NextApiRequest,
  res: NextApiResponse,
): Adapter {
  return {
    async createUser(user) {
      const createdUser = await prisma.user.create({
        data: {
          name: user.name,
          avatar_url: user.avatar_url,
          email: user.email,
        }
      })

      return {
        ...createdUser,
        avatar_url: createdUser.avatar_url!,
        emailVerified: null
      }
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      })

      if(!user) return null

      return {
        ...user,
        avatar_url: user.avatar_url!,
        emailVerified: null
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email
        }
      })

      if(!user) return null

      return {
        ...user,
        avatar_url: user.avatar_url!,
        emailVerified: null
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider_account_id: providerAccountId,
            provider
          }
        },
        include: {
          user: true
        }
      })

      if(!account) return null

      const { user } = account

      return {
        ...user,
        avatar_url: user.avatar_url!,
        emailVerified: null
      }
    },

    async updateUser(user) {
      const updatedUser = await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url
        }
      })

      return {
        ...updatedUser,
        avatar_url: updatedUser.avatar_url!,
        emailVerified: null
      }
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          user_id: userId,
          expires,
          session_token: sessionToken,
        },
      })

      return {
        sessionToken,
        userId,
        expires,
      }
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!prismaSession) return null

      const { user, ...session } = prismaSession

      return {
        session: {
          userId: session.user_id,
          expires: session.expires,
          sessionToken: session.session_token,
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email!,
          avatar_url: user.avatar_url!,
          emailVerified: null,
        },
      }
    },

    async updateSession({ sessionToken, userId, expires }) {
      const prismaSession = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          user_id: userId,
          expires,
        },
      })

      return {
        sessionToken: prismaSession.session_token,
        userId: prismaSession.user_id,
        expires: prismaSession.expires,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      })
    },
  }
}