<script setup lang="ts">
  interface Props {
    disabled?: string[]
  }
  defineOptions({ name: 'CounterButtons' })

  const { disabled = [] } = defineProps<Props>()
  const $emit = defineEmits<{
    increment: []
    decrement: []
    'reset-value': []
  }>()
</script>
<template>
  <div class="d-flex ga-2">
    <app-btn
      color="red"
      data-testid="decrement"
      :disabled="disabled.includes('decrement')"
      variant="outlined"
      @click="$emit('decrement')"
      >-</app-btn
    >
    <app-btn
      color="blue"
      data-testid="increment"
      :disabled="disabled.includes('increment')"
      variant="outlined"
      @click="$emit('increment')"
      >+</app-btn
    >
  </div>
  <div>
    <app-btn
      color="error"
      data-testid="reset"
      :disabled="disabled.includes('reset')"
      @click="$emit('reset-value')"
      >Reiniciar</app-btn
    >
  </div>
</template>
