import { env } from '@/lib/env'

import { jwtDecode } from 'jwt-decode'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

type AccessToken = {
  access_token: string
}

type Response<T = Record<string, unknown>> = T & {
  message: string
  error: string
  statusCode: 401 | 200 | 404 | 201
}

type User = {
  id: string
  fullName: string
  firstName: string
  lastName: string
  email: string
  partner: string | null
}

type UserResponse = {
  user: User
}

declare module 'next-auth' {
  interface User {
    partner: string | null
    initials: string
  }

  interface JWT {
    id: string
    partner: string | null
  }

  interface Session {
    user: User
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  basePath: '/dashboard',
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const accessTokenRequest = await fetch(`${env.BACKEND_URL}/sessions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        })

        const accessTokenResponse =
          (await accessTokenRequest.json()) as Response<AccessToken>

        if (accessTokenRequest.status !== 201) {
          throw new Error(accessTokenResponse.error)
        }

        const { access_token } = accessTokenResponse
        const userDecoded = jwtDecode(access_token)

        const userRequest = await fetch(
          `${env.BACKEND_URL}/users/${userDecoded.sub}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        const userResponse =
          (await userRequest.json()) as Response<UserResponse>

        if (userRequest.status !== 200) {
          throw new Error(userResponse.error)
        }

        const { user } = userResponse

        const initials = `${user.firstName.at(0)}${user.lastName.at(0)}`

        return {
          ...userDecoded,
          ...user,
          id: userDecoded.sub,
          name: user.fullName,
          initials,
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          id: user.id,
          partner: user.partner,
          initials: user.initials,
        }
      }
      return token
    },
    session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          partner: token.partner as string | null,
          initials: token.initials as string,
        }
      }
      return session
    },
  },
})
