'use server'

import { signInSchema } from '@/app/login/components/login-form/utils/schema'
import type { ActionState } from '@/lib/action-state/action-state'
import { signIn } from '@/lib/auth'
import { AuthError } from 'next-auth'

export async function onSubmitAction(
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data = Object.fromEntries(formData)
  const parsed = signInSchema.safeParse(data)

  const isValid = parsed.success

  if (!isValid) {
    return {
      status: 'error',
      message: 'Credenciais inválidas.',
    }
  }

  try {
    await signIn('credentials', { ...parsed.data, redirect: false })
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        status: 'error',
        message: 'Credenciais inválidas.',
      }
    }

    return {
      status: 'error',
      message: 'Um erro inesperado ocorreu. Tente novamente em alguns minutos.',
    }
  }

  return {
    status: 'success',
    message: 'Login realizado com sucesso.',
  }
}
