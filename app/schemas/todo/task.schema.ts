import { z } from '~/schemas'

export const TaskSchema = z.object({
  id: z.uuid(),
  title: z.string().min(1, { error: 'Campo Obrigatório' }),
  isDone: z.boolean(),
})

export const TaskRowSchema = TaskSchema
export const TaskListSchema = z.array(TaskRowSchema)

export type TaskRow = z.infer<typeof TaskRowSchema>
export type TaskList = z.infer<typeof TaskListSchema>
