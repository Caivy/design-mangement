import { createAuthClient } from "better-auth/react"
import { usernameClient } from "better-auth/client/plugins"
// import { env } from '@/env'

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  // baseURL: env.SERVER_URL,
  emailAndPassword: {
    enabled: true
  },
  plugins: [
    usernameClient()
  ]
})

export const { signIn, signUp, useSession, getSession } = createAuthClient()
