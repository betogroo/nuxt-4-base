import { z } from 'zod'

export const DemandItemSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1, 'Campo Obrigatório'),
  rg: z.string().min(8),
  status: z.enum(['cadastrado', 'consultado', 'liberado', 'emitido']),
})

export const DemandListSchema = z.array(DemandItemSchema)

export type DemandItem = z.infer<typeof DemandItemSchema>
