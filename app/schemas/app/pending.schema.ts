import { z } from 'zod'

export const PendingStateSchema = z.discriminatedUnion('loading', [
  z.object({
    loading: z.literal(false),
  }),
  z.object({
    loading: z.literal(true),
    action: z.string().min(1),
    item: z.uuid().optional(),
  }),
])

export type PendingState = z.infer<typeof PendingStateSchema>
