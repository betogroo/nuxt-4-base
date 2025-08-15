<script setup lang="ts">
  import { z, TaskRowSchema } from '~/schemas'

  type Task = z.infer<typeof TaskRowSchema>

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
    const result = TaskRowSchema.safeParse(task)
    if (!result.success) {
      const pretty = z.prettifyError(result.error)
      alert(pretty)
    } else {
      console.log(TaskRowSchema.meta())
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
