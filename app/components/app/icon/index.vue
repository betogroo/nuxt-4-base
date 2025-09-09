<script setup lang="ts">
  interface Props {
    name: string
    size?: string
    color?: string
    provider?: 'vuetify' | 'nuxt'
  }
  const { provider = 'vuetify', size = '24px', color = undefined } = defineProps<Props>()
</script>

<template>
  <v-icon v-if="provider === 'vuetify'" :color="color" :icon="name" :size="size" />
  <Icon v-else :name :size="size" />
</template>
