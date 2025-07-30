<script setup lang="ts">
  definePageMeta({
    name: 'ToDoIndex',
  })

  const { todoList, addTodo } = useTodo()
  const title = ref<string>('')

  const handleSubmit = () => {
    addTodo(title.value)
    title.value = ''
  }
</script>

<template>
  <todo-item v-for="todo in todoList" :key="todo.id" data-testid="todo-list" :item="todo" />
  <div>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field v-model="title" data-testid="title" variant="outlined" />
      <v-btn data-testid="submit" :disabled="!title.trim()" type="submit">Enviar</v-btn>
    </v-form>
  </div>
</template>
