import { z } from 'zod'

export const ErrorSchema = z.object({
  message: z.string(),
  code: z.string().optional(),
  field: z.string().optional(),
  cause: z.unknown(),
})

export type Error = z.infer<typeof ErrorSchema>
