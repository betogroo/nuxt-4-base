<script setup lang="ts">
  import { TodoList } from '#components'

  definePageMeta({
    name: 'ToDoIndex',
  })

  const todo = useTodoStore()
  const { pendingState, isPending } = usePending()

  const handleSubmit = async (title: string, onSuccess: () => void, onError: () => void) => {
    const error = false
    if (error) {
      onError()
      return
    }
    await todo.addTodo(title)
    onSuccess()
  }

  const handleDelete = async (id: string) => {
    await todo.deleteTodo(id)
  }

  const handleToggle = async (id: string) => {
    todo.toggleIsDone(id)
    console.log(id)
  }
</script>

<template>
  <v-container border max-width="480">
    <v-sheet border class="pa-3" rounded="lg">
      <todo-form-task
        :is-pending="isPending"
        @add-task="(title, onSuccess, onError) => handleSubmit(title, onSuccess, onError)"
      />

      <TodoList
        :completed-todos="todo.completedTodos"
        :pending-state="pendingState"
        :pending-todos="todo.pendingTodos"
        @delete-item="handleDelete"
        @toggle-is-done="handleToggle"
      />
    </v-sheet>
    {{ pendingState }}
  </v-container>
</template>
