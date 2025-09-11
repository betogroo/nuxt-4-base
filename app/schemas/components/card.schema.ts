import { z } from 'zod'

export const CardPropsSchema = z.object({
  variant: z.enum(['outlined', 'tonal']),
})

export type CardProps = z.infer<typeof CardPropsSchema>
