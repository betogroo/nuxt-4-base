import { ZodError } from 'zod'
import type { AppError } from '~/schemas'

export const handleError = (err: unknown): AppError => {
  if (err instanceof ZodError) {
    const issue = err.issues[0]
    return {
      message: issue?.message || 'Ocorreu um erro inesperado',
      field: issue?.path.join('.') || undefined,
      code: 'VALIDATION_ERROR',
      cause: err,
    }
  }

  return {
    message: 'Ocorreu um erro inesperado.',
    code: 'UNKNOWN_ERROR',
    cause: err,
  }
}
