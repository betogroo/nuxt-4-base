import { ZodError } from 'zod'
import type { AppError } from '~/schemas'
import { useNotificationStore } from '~/stores/notification'

export const handleError = (err: unknown): AppError => {
  const notify = useNotificationStore()

  if (err instanceof ZodError) {
    const issue = err.issues[0]
    notify.notify(issue?.message, 'error')
    return {
      message: issue?.message || 'Ocorreu um erro inesperado',
      field: issue?.path.join('.') || undefined,
      code: 'VALIDATION_ERROR',
      cause: err,
    }
  }
  notify.notify('Erro desconhecido', 'error')
  return {
    message: 'Ocorreu um erro inesperado.',
    code: 'UNKNOWN_ERROR',
    cause: err,
  }
}
