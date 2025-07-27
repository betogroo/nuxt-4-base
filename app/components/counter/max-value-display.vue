<script setup lang="ts">
  interface Props {
    value?: number
  }
  const { value = 10 } = defineProps<Props>()
</script>

<template>
  <h3 data-testid="maxDisplay">Max: {{ value }}</h3>
</template>
