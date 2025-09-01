<script setup lang="ts">
  import { UserLoginSchema, type UserLogin } from '~/schemas'

  const formData = ref<UserLogin>({
    email: '',
    password: '',
  })

  const onSubmit = () => {
    try {
      const testData = UserLoginSchema.parse(formData.value)
      console.log(testData)
    } catch (err) {
      const error = handleError(err)
      console.log(error, error.message)
    }
  }
</script>

<template>
  <v-container>
    <h1>Teste de Erros</h1>
    <v-form @submit.prevent="onSubmit">
      <v-text-field v-model="formData.email" />
      <v-text-field v-model="formData.password" />
      <v-btn type="submit">Testar</v-btn>
    </v-form>
  </v-container>
</template>
