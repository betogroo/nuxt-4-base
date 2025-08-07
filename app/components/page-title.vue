<script lang="ts" setup>
  interface Props {
    title?: string
  }
  defineOptions({ name: 'PageTitle' })
  const { title = 'Título' } = defineProps<Props>()
</script>

<template>
  <h1 class="text-h4 font-weight-bold">{{ title }}</h1>
</template>
