<script setup lang="ts">
  import type { TodoItem } from '~/composables/useTodo'
  interface Props {
    item: TodoItem
  }
  const { item } = defineProps<Props>()
  const $emit = defineEmits<{
    'toggle-item': [id: string]
  }>()
</script>

<template>
  <v-list-item>
    <template #prepend>
      <v-icon
        data-testid="is-done-icon"
        :icon="item.isDone ? 'mdi-check' : 'mdi-square-outline'"
        variant="text"
        @click="$emit('toggle-item', item.id)"
    /></template>
    <template #title>{{ item.title }}</template>
  </v-list-item>
</template>
