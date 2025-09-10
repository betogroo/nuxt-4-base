<script setup lang="ts">
  import type { UserLogin } from '~/schemas'

  definePageMeta({
    layout: 'no-nav',
    name: 'Login',
  })

  const { login } = useAuth()
  const { isPending } = usePending()

  const handleLogin = async (userLogin: UserLogin) => {
    await login(userLogin.email, userLogin.password)
  }

  useUserStatus('/')
</script>

<template>
  <app-container background="bg-indigo" full-height justify="center">
    <v-card
      border
      class="d-flex flex-column justify-center ma-3 pa-3 bg-white"
      flat
      height="360"
      rounded="md"
      variant="outlined"
      width="360"
    >
      <div class="d-flex flex-column justify-end">
        <h1 class="text-h4">Login</h1>
        <auth-form-login :is-pending="isPending" @login="handleLogin" />

        <div>link</div>
      </div>
    </v-card>
  </app-container>
</template>
