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
  <v-list-item color="orange" density="compact" @click="$emit('toggle-item', item.id)">
    <template #prepend>
      <v-avatar data-testid="is-done-icon" size="x-small">
        <v-icon v-if="!item.isDone" color="teal" icon="mdi-circle-outline" />
        <v-icon v-else color="deep-purple" icon="mdi-check-circle-outline" />
      </v-avatar>
    </template>
    <v-divider />
    <template #title>
      <div class="d-flex">
        <div
          class="text-truncate"
          :class="item.isDone ? 'text-decoration-line-through text-disabled' : ''"
        >
          {{ item.title }}
        </div>
      </div>
    </template>
  </v-list-item>
</template>
