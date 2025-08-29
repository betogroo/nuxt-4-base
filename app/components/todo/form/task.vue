<script setup lang="ts">
  interface Props {
    isPending?: (action: string, item?: string) => boolean
  }
  const { isPending = () => false } = defineProps<Props>()

  const $emit = defineEmits<{
    'add-task': [title: string, onSuccess: () => void]
  }>()
  const title = ref<string>('')
  const handleSubmit = () => {
    $emit('add-task', title.value, () => {
      title.value = ''
    })
  }
</script>

<template>
  <v-form @submit.prevent="handleSubmit">
    <v-row align="center">
      <v-col cols="9">
        <v-text-field
          v-model="title"
          data-testid="title"
          density="compact"
          :disabled="isPending('addTodo')"
          hide-details
          variant="outlined"
        />
      </v-col>
      <v-col>
        <v-btn
          data-testid="submit"
          :disabled="!title.trim()"
          :loading="isPending('addTodo')"
          type="submit"
          >+</v-btn
        ></v-col
      >
    </v-row>
  </v-form>
</template>
