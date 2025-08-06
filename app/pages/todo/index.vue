<script setup lang="ts">
  import { TodoList } from '#components'

  definePageMeta({
    name: 'ToDoIndex',
  })

  const { addTodo, toggleIsDone, deleteTodo, completedTodos, pendingTodos } = useTodo()
  const title = ref<string>('')

  const handleSubmit = () => {
    addTodo(title.value)
    title.value = ''
  }

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }

  const handleToggle = (id: string) => {
    toggleIsDone(id)
    console.log(id)
  }
</script>

<template>
  <v-container border max-width="480">
    <v-sheet border class="pa-3" rounded="lg">
      <v-form @submit.prevent="handleSubmit">
        <v-row align="center">
          <v-col cols="9">
            <v-text-field
              v-model="title"
              data-testid="title"
              density="compact"
              hide-details
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-btn data-testid="submit" :disabled="!title.trim()" type="submit">+</v-btn></v-col
          >
        </v-row>
      </v-form>
      <TodoList
        :completed-todos="completedTodos"
        :pending-todos="pendingTodos"
        @delete-item="handleDelete"
        @toggle-is-done="handleToggle"
      />
    </v-sheet>
  </v-container>
</template>
