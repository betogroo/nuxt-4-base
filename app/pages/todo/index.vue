<script setup lang="ts">
  definePageMeta({
    name: 'ToDoIndex',
  })

  const { todoList, addTodo, toggleIsDone, deleteTodo } = useTodo()
  const title = ref<string>('')

  const handleSubmit = () => {
    addTodo(title.value)
    title.value = ''
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
              hide-details
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-btn data-testid="submit" :disabled="!title.trim()" type="submit">+</v-btn></v-col
          >
        </v-row>
      </v-form>
      <v-list v-if="todoList.length" border class="my-2" rounded="lg">
        <todo-item
          v-for="todo in todoList"
          :key="todo.id"
          data-testid="todo-list"
          :item="todo"
          @delete-item="deleteTodo(todo.id)"
          @toggle-item="toggleIsDone(todo.id)"
        />
      </v-list>
      <v-alert v-else class="my-2" data-testid="no-todo" type="error" variant="outlined"
        >Nenhum compromisso cadastrado</v-alert
      >
    </v-sheet>
  </v-container>
</template>
