<script setup lang="ts">
  import * as z from 'zod'
  const TaskSchema = z.object({
    id: z.uuid(),
    title: z.string().min(1, { error: 'Campo Obrigatório (Erro Personalizado)' }),
    isDone: z.boolean(),
  })

  type Task = z.infer<typeof TaskSchema>

  const task = ref<Task>({
    id: crypto.randomUUID(),
    title: 'Arrumar a Cama',
    isDone: false,
  })
  const taskWithError = ref<Task>({
    id: 'id',
    title: '',
    isDone: '',
  })

  const testParsedData = (task: Task) => {
    const result = TaskSchema.safeParse(task)
    if (!result.success) {
      const pretty = z.prettifyError(result.error)
      //alert(result.error.message) // ZodError instance

      alert(pretty)
    } else {
      console.log(TaskSchema.meta())
      alert(result.data.title)
    }
  }
</script>

<template>
  <div>
    <h1>Zod</h1>
    <v-row>
      <v-col>
        <v-btn @click="testParsedData(task)">Testar sem Erro</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="testParsedData(taskWithError)">Testar com Erro</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
