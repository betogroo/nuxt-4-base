<script setup lang="ts">
  import type { TodoItem } from '~/composables/useTodo'
  interface Props {
    item: TodoItem
  }
  const { item } = defineProps<Props>()
  const $emit = defineEmits<{
    cancel: []
    delete: [id: string]
  }>()
</script>

<template>
  <v-list-item append-icon="transparent" density="compact">
    <template #append>
      <v-sheet class="d-flex ga-5 ml-2">
        <v-avatar size="x-small">
          <v-icon
            color="error"
            data-testid="cancel-icon"
            icon="mdi-close-thick"
            @click.stop="$emit('cancel')"
          />
        </v-avatar>
        <v-avatar size="x-small">
          <v-icon
            color="success"
            data-testid="delete-icon"
            icon="mdi-check-bold"
            @click.stop="$emit('delete', item.id)"
          />
        </v-avatar>
      </v-sheet>
    </template>
    <template #title>
      <v-alert
        data-testid="alert"
        density="compact"
        height="40"
        icon="mdi-exclamation-thick"
        type="error"
        >Deseja realmente excluir?</v-alert
      >
    </template>
  </v-list-item>
</template>
