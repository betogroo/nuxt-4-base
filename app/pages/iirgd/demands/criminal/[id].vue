<script setup lang="ts">
  definePageMeta({
    validate: async (route) => {
      // Check if the id is made up of digits
      console.log(route)
      return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    },
  })
  const { params } = useRoute()
</script>

<template>
  <app-container>
    <page-title :title="`Demanda número ${params.id}`" />
  </app-container>
</template>
