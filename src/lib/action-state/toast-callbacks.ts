import type { ActionState } from '@/lib/action-state/action-state'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'

type CreateToastCallbacksOptions = {
  loadingMessage?: string
  redirectTo?: string
}

export const createToastCallbacks = (options: CreateToastCallbacksOptions) => {
  return {
    onStart: () => {
      return toast.loading(options.loadingMessage || 'Loading ...')
    },
    onEnd: (reference: string | number) => {
      toast.dismiss(reference)
    },
    onSuccess: (result: ActionState) => {
      if (result?.message) {
        toast.success(result.message)
      }

      if (options.redirectTo) {
        redirect(options.redirectTo)
      }
    },
    onError: (result: ActionState) => {
      if (result?.message) {
        toast.error(result.message)
      }
    },
  }
}
