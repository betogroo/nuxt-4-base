<script setup lang="ts">
  defineOptions({ name: 'CounterButtons' })
  const $emit = defineEmits<{
    increment: []
    decrement: []
    resetValue: []
  }>()
</script>

<template>
  <div>
    <div class="d-flex ga-3">
      <v-btn color="red" data-testid="decrement" variant="outlined" @click="$emit('decrement')"
        >-</v-btn
      >
      <v-btn color="blue" data-testid="increment" variant="outlined" @click="$emit('increment')"
        >+</v-btn
      >
    </div>
    <div>
      <v-btn color="error" data-testid="reset" @click="$emit('resetValue')">Reiniciar</v-btn>
    </div>
  </div>
</template>
