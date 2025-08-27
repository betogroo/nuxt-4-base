<script setup lang="ts">
  import type { UserLogin } from '~/schemas'

  interface Props {
    isPending?: (action: string, item?: string) => boolean
  }
  const { isPending = () => false } = defineProps<Props>()

  const $emit = defineEmits<{
    login: [userLogin: UserLogin]
  }>()

  const userLogin = ref<UserLogin>({
    email: '',
    password: '',
  })

  const handleSubmit = (userLogin: UserLogin) => {
    $emit('login', userLogin)
  }
</script>

<template>
  <v-form class="d-flex flex-column ga-2 mt-4" @submit.prevent="handleSubmit(userLogin)">
    <v-text-field
      v-model="userLogin.email"
      density="compact"
      hide-details
      label="Email"
      type="email"
      variant="outlined"
    />
    <v-text-field
      v-model="userLogin.password"
      density="compact"
      hide-details
      label="Senha"
      type="password"
      variant="outlined"
    />
    <v-btn block color="primary" :loading="isPending('login')" type="submit">Login</v-btn>
  </v-form>
</template>
