import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email({ message: 'Digite um email válido' }),
  password: z.string().min(1, { message: 'Campo obrigatório' }),
})

export type SignInSchemaType = z.infer<typeof signInSchema>
