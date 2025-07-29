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
  <todo-item v-for="todo in todoList" :key="todo.id" data-testid="todo-list" :item="todo" />
</template>
