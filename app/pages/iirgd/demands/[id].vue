<script setup lang="ts">
  const { params } = useRoute()
</script>

<template>
  <div>Demanda número tal {{ params.id }}</div>
</template>
