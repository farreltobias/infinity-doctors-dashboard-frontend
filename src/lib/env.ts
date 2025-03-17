import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    BACKEND_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_OVERVIEW_EMBED_URL: z.string().url(),
    NEXT_PUBLIC_EMERGENCY_CARE_EMBED_URL: z.string().url(),
    NEXT_PUBLIC_SPECIALITIES_EMBED_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_OVERVIEW_EMBED_URL: process.env.NEXT_PUBLIC_OVERVIEW_EMBED_URL,
    NEXT_PUBLIC_EMERGENCY_CARE_EMBED_URL:
      process.env.NEXT_PUBLIC_EMERGENCY_CARE_EMBED_URL,
    NEXT_PUBLIC_SPECIALITIES_EMBED_URL:
      process.env.NEXT_PUBLIC_SPECIALITIES_EMBED_URL,
  },
})
