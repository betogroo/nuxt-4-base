<script setup lang="ts">
  interface Props {
    name: string
    size?: string
    color?: string
  }
  defineProps<Props>()
</script>

<template>
  <v-icon :color="color" :icon="name" :size="size" />
</template>
