<script setup lang="ts">
  interface Props {
    variant?: 'outlined' | 'tonal'
  }
  const { variant = 'outlined' } = defineProps<Props>()
</script>

<template>
  <v-card :variant="variant"><slot /></v-card>
</template>
