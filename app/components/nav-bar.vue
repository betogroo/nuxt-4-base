<script setup lang="ts">
  defineOptions({ name: 'NavBar' })
</script>
<template>
  <nav>
    <NuxtLink data-testid="link-home" to="/">Home</NuxtLink> |
    <NuxtLink data-testid="link-counter" to="/counter">Counter</NuxtLink> |
    <NuxtLink data-testid="link-todo" to="/todo">Todo</NuxtLink> |
    <NuxtLink data-testid="link-about" to="/about">About</NuxtLink>
  </nav>
</template>
