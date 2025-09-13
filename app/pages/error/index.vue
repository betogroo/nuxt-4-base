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
      console.log(error)
    }
  }
</script>

<template>
  <app-container background="bg-primary">
    <div>
      <page-title title="Teste de Erros" />
      <v-form @submit.prevent="onSubmit">
        <v-text-field v-model="formData.email" />
        <v-text-field v-model="formData.password" />
        <app-btn type="submit">Testar</app-btn>
      </v-form>
    </div>
  </app-container>
</template>
