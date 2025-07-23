<script setup lang="ts">
  defineOptions({ name: 'CounterDisplay' })
  defineProps<Props>()
  interface Props {
    displayNumber: number
  }
</script>

<template>
  <div class="text-h1 font-weight-bold">10</div>
</template>
