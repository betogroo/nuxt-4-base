<script setup lang="ts">
  defineOptions({ name: 'NavBar' })
  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    return navigateTo('/auth/login')
  }
</script>
<template>
  <nav>
    <NuxtLink data-testid="link-home" to="/">Home</NuxtLink> |
    <NuxtLink data-testid="link-counter" to="/counter">Counter</NuxtLink> |
    <NuxtLink data-testid="link-todo" to="/todo">Todo</NuxtLink> |
    <NuxtLink data-testid="link-zod" to="/zod">Zod</NuxtLink> |
    <NuxtLink data-testid="link-about" to="/about">About</NuxtLink>
    <v-btn variant="text" @click="handleLogout">Logout</v-btn>
  </nav>
</template>
