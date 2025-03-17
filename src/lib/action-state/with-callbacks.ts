import type { ActionState } from '@/lib/action-state/action-state'

type Callbacks<T, R = unknown> = {
  onStart?: () => R
  onEnd?: (reference: R) => void
  onSuccess?: (result: T) => void
  onError?: (result: T) => void
}

export const withCallbacks = <
  Args extends unknown[],
  T extends ActionState,
  R = unknown,
>(
  fn: (...args: Args) => Promise<T>,
  callbacks: Callbacks<T, R>,
): ((...args: Args) => Promise<T>) => {
  return async (...args: Args) => {
    const promise = fn(...args)

    const reference = callbacks.onStart?.()

    try {
      const result = await promise

      if (result?.status === 'success') {
        callbacks.onSuccess?.(result)
      }

      if (result?.status === 'error') {
        callbacks.onError?.(result)
      }
    } finally {
      if (reference) {
        callbacks.onEnd?.(reference)
      }
    }

    return promise
  }
}
