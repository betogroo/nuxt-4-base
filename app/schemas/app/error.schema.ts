import { z } from 'zod'

export const AppErrorSchema = z.object({
  message: z.string(),
  code: z.string().optional(),
  field: z.string().optional(),
  cause: z.unknown(),
})

export type AppError = z.infer<typeof AppErrorSchema>
