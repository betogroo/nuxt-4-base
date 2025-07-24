<script setup lang="ts">
  defineOptions({ name: 'CounterButtons' })
  const $emit = defineEmits<{
    increment: []
    decrement: []
  }>()
</script>

<template>
  <div class="d-flex ga-3">
    <v-btn color="red" variant="outlined" @click="$emit('decrement')">-</v-btn>
    <v-btn color="blue" variant="outlined" @click="$emit('increment')">+</v-btn>
  </div>
</template>
