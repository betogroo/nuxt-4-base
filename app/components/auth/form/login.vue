<script setup lang="ts">
  import { UserLoginSchema, type UserLogin } from '~/schemas'
  import { useField, useForm } from 'vee-validate'

  interface Props {
    isPending?: (action: string, item?: string) => boolean
  }
  const { isPending = () => false } = defineProps<Props>()

  const $emit = defineEmits<{
    login: [userLogin: UserLogin]
  }>()

  const userLogin = ref<UserLogin>({
    email: 'luizhumberto@gmail.com',
    password: '123456',
  })

  const { values, handleSubmit, meta } = useForm<UserLogin>({
    validationSchema: UserLoginSchema,
    initialValues: userLogin.value,
  })
  const { value: email, errorMessage: emailError, meta: emailMeta } = useField<string>('email')
  const {
    value: password,
    errorMessage: passwordError,
    meta: passwordMeta,
  } = useField<string>('password')

  const onSubmit = handleSubmit(async () => {
    $emit('login', values)
  })
</script>

<template>
  <v-form class="d-flex flex-column ga-2 mt-4" @submit.prevent="onSubmit">
    <v-text-field
      v-model="email"
      density="compact"
      :error-messages="emailError"
      :hide-details="emailMeta.valid"
      label="Email"
      type="email"
      variant="outlined"
    />
    <v-text-field
      v-model="password"
      density="compact"
      :error-messages="passwordError"
      :hide-details="passwordMeta.valid"
      label="Senha"
      type="password"
      variant="outlined"
    />
    <app-btn
      block
      color="primary"
      :disabled="!meta.valid"
      :loading="isPending('login')"
      type="submit"
      >Login</app-btn
    >
  </v-form>
</template>
