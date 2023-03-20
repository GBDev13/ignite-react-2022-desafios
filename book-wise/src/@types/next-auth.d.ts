import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string | number
    name: string
    email: string
    avatar_url: string
  }

  interface Session {
    user: User
  }
}
