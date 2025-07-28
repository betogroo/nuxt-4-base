<script setup lang="ts">
  definePageMeta({
    name: 'ToDoIndex',
  })
  const todoList = [
    {
      id: crypto.randomUUID(),
      title: 'Arrumar a Cama',
      isDone: false,
    },
  ]
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" data-testid="todo-list">{{ todo.title }}</div>
</template>
