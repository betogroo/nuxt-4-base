import { z } from 'zod'

export const backgroundSchema = z.enum(['bg-white', 'bg-indigo', 'bg-grey-lighten-4', 'bg-primary'])

export type BackgroundColor = z.infer<typeof backgroundSchema>
