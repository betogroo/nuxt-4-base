<script setup lang="ts">
  import { useForm, useField } from 'vee-validate'
  import type { TaskInsert } from '~/schemas'
  import { TaskInsertSchema } from '~/schemas'
  interface Props {
    isPending?: (action: string, item?: string) => boolean
  }
  const { isPending = () => false } = defineProps<Props>()

  const $emit = defineEmits<{
    'add-task': [title: string, onSuccess: () => void, onError: () => void]
  }>()

  const { values, handleSubmit, handleReset, meta } = useForm<TaskInsert>({
    validationSchema: TaskInsertSchema,
  })

  const { value: title, errorMessage: titleError } = useField<string>('title')

  const onSubmit = handleSubmit(async () => {
    $emit(
      'add-task',
      values.title,
      () => {
        handleReset()
      },
      () => {
        console.log('Erro')
      },
    )
  })
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-row align="center">
      <v-col cols="9">
        <v-text-field
          v-model="title"
          data-testid="title"
          density="compact"
          :disabled="isPending('addTodo')"
          :error-messages="titleError"
          variant="outlined"
        />
      </v-col>
      <v-col>
        <v-btn
          data-testid="submit"
          :disabled="!meta.valid"
          :loading="isPending('addTodo')"
          type="submit"
          >+</v-btn
        ></v-col
      >
    </v-row>
  </v-form>
</template>
