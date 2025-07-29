<script setup lang="ts">
  import type { TodoItem } from '~/composables/useTodo'
  interface Props {
    item: TodoItem
  }
  const { item } = defineProps<Props>()
</script>

<template>
  <div>{{ item.title }}</div>
</template>
