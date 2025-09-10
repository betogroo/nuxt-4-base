<script setup lang="ts">
  definePageMeta({
    name: 'Home Page',
  })
  useUserStatus('/')
</script>
<template>
  <app-container>
    <PageTitle title="Home Page" />
  </app-container>
</template>
