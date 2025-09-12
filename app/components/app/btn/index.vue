<script setup lang="ts">
  interface Props {
    icon?: string
    variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  }
  const { variant = 'elevated', icon = undefined } = defineProps<Props>()
</script>

<template>
  <v-btn v-if="icon" :icon="icon" variant="text" />
  <v-btn v-else :variant="variant"><slot /></v-btn>
</template>
