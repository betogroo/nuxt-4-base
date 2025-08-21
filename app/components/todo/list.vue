<script setup lang="ts">
  import type { TaskRow } from '~/schemas'
  interface Props {
    pendingTodos: TaskRow[]
    completedTodos: TaskRow[]
  }
  const { pendingTodos, completedTodos } = defineProps<Props>()

  const $emit = defineEmits<{
    'delete-item': [id: string]
    'toggle-is-done': [id: string]
  }>()

  const confirmId = ref<string | null>(null)
  const startConfirm = (id: string) => {
    confirmId.value = id
  }
  const cancelConfirm = () => {
    confirmId.value = null
  }
  const confirmDelete = (id: string) => {
    $emit('delete-item', id)
    cancelConfirm()
  }

  const haveTodo = computed(() => pendingTodos.length > 0 || completedTodos.length > 0)
</script>

<template>
  <div>
    <v-list v-if="haveTodo" border class="my-2" data-testid="todo-list" rounded="lg">
      <template v-if="pendingTodos.length">
        <template v-for="todo in pendingTodos" :key="todo.id">
          <todo-item-delete
            v-if="confirmId === todo.id"
            :item="todo"
            @cancel="cancelConfirm"
            @delete="confirmDelete"
          />
          <todo-item
            v-else
            :item="todo"
            @delete-item="startConfirm(todo.id)"
            @toggle-item="$emit('toggle-is-done', todo.id)"
          />
        </template>
      </template>
      <v-divider v-if="completedTodos.length" class="p-3 m-3" thickness="5" />
      <template v-if="completedTodos.length">
        <template v-for="todo in completedTodos" :key="todo.id">
          <todo-item-delete
            v-if="confirmId === todo.id"
            :item="todo"
            @cancel="cancelConfirm"
            @delete="confirmDelete"
          />
          <todo-item
            v-else
            :item="todo"
            @delete-item="startConfirm(todo.id)"
            @toggle-item="$emit('toggle-is-done', todo.id)"
          />
        </template>
      </template>
    </v-list>
    <v-alert v-else class="my-2" data-testid="no-todo" type="error" variant="outlined"
      >Nenhum compromisso cadastrado</v-alert
    >
  </div>
</template>
