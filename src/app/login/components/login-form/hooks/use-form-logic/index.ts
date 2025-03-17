import { onSubmitAction } from '@/app/login/components/login-form/hooks/use-form-logic/on-submit-action'
import {
  type SignInSchemaType,
  signInSchema,
} from '@/app/login/components/login-form/utils/schema'
import { HOME_ROUTE } from '@/data/routes'
import { createToastCallbacks } from '@/lib/action-state/toast-callbacks'
import { withCallbacks } from '@/lib/action-state/with-callbacks'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useActionState } from 'react'
import { useForm } from 'react-hook-form'

export const useFormLogic = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [, formAction, isPending] = useActionState(
    withCallbacks(
      onSubmitAction,
      createToastCallbacks({
        loadingMessage: 'Entrando...',
        redirectTo: HOME_ROUTE.url,
      }),
    ),
    { status: 'idle' },
  )

  const form = useForm<SignInSchemaType>({
    mode: 'onTouched',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const shouldSubmit = form.formState.isValid && !isPending

  return {
    form,
    formRef,
    formAction,
    shouldSubmit,
  }
}
