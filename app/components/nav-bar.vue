<script setup lang="ts">
  defineOptions({ name: 'NavBar' })
</script>
<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink> | <NuxtLink to="/counter">Counter</NuxtLink> |
    <NuxtLink to="/about">About</NuxtLink>
  </nav>
</template>
