<script setup lang="ts">
  defineOptions({ name: 'NavBar' })
  const user = useSupabaseUser()

  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    return navigateTo('/')
  }

  const handleLogin = () => {
    return navigateTo('/auth/login')
  }
</script>
<template>
  <nav>
    <NuxtLink data-testid="link-home" to="/">Home</NuxtLink> |
    <NuxtLink data-testid="link-iirgd" to="iirgd">IIRGD</NuxtLink> |
    <NuxtLink data-testid="link-about" to="/about">About</NuxtLink>

    <template v-if="user">
      <v-btn variant="text" @click="handleLogout">Logout</v-btn>
      {{ user.email }}
    </template>
    <v-btn v-else variant="text" @click="handleLogin">Login</v-btn>
  </nav>
</template>
