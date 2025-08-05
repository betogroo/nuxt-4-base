<script setup lang="ts">
  interface Props {
    pendingTodos: TodoItem[]
    completedTodos: TodoItem[]
  }
  const { pendingTodos, completedTodos } = defineProps<Props>()

  const $emit = defineEmits<{
    'delete-item': [id: string]
    'toggle-is-done': [id: string]
  }>()

  const haveTodo = computed(() => pendingTodos.length > 0 || completedTodos.length > 0)
</script>

<template>
  <div>
    <v-list v-if="haveTodo" border class="my-2" data-testid="todo-list" rounded="lg">
      <template v-if="pendingTodos.length">
        <v-fade-transition group>
          <todo-item
            v-for="todo in pendingTodos"
            :key="todo.id"
            :item="todo"
            @delete-item="$emit('delete-item', todo.id)"
            @toggle-item="$emit('toggle-is-done', todo.id)"
          />
        </v-fade-transition>
      </template>
      <v-divider v-if="completedTodos.length" class="p-3 m-3" thickness="5" />
      <template v-if="completedTodos.length">
        <v-fade-transition group>
          <todo-item
            v-for="todo in completedTodos"
            :key="todo.id"
            :item="todo"
            @delete-item="$emit('delete-item', todo.id)"
            @toggle-item="$emit('toggle-is-done', todo.id)"
          />
        </v-fade-transition>
      </template>
    </v-list>
    <v-alert v-else class="my-2" data-testid="no-todo" type="error" variant="outlined"
      >Nenhum compromisso cadastrado</v-alert
    >
  </div>
</template>
