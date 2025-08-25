<script setup lang="ts">
  definePageMeta({
    layout: 'no-nav',
    name: 'Login',
  })

  const { login } = useAuth()
  const { isPending } = usePending()

  const email = ref('')
  const password = ref('')
</script>

<template>
  <v-responsive class="fill-height bg-indigo">
    <v-container class="d-flex justify-center align-center fill-height">
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
          <v-form class="d-flex flex-column ga-2 mt-4" @submit.prevent="login(email, password)">
            <v-text-field
              v-model="email"
              density="compact"
              hide-details
              label="Email"
              type="email"
              variant="outlined"
            />
            <v-text-field
              v-model="password"
              density="compact"
              hide-details
              label="Senha"
              type="password"
              variant="outlined"
            />
            <v-btn block color="primary" :loading="isPending('login')" type="submit">Login</v-btn>
          </v-form>
          <div>link</div>
        </div>
      </v-card>
    </v-container>
  </v-responsive>
</template>
