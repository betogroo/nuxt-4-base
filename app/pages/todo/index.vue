<script setup lang="ts">
  import { TodoList } from '#components'

  definePageMeta({
    name: 'ToDoIndex',
  })

  const todo = useTodoStore()
  const { pendingState, isPending } = usePending()
  const title = ref<string>('')

  const handleSubmit = async () => {
    await todo.addTodo(title.value)
    title.value = ''
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
      <v-form @submit.prevent="handleSubmit">
        <v-row align="center">
          <v-col cols="9">
            <v-text-field
              v-model="title"
              data-testid="title"
              density="compact"
              :disabled="isPending('addTodo')"
              hide-details
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-btn
              data-testid="submit"
              :disabled="!title.trim()"
              :loading="isPending('addTodo')"
              type="submit"
              >+</v-btn
            ></v-col
          >
        </v-row>
      </v-form>
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
