<script setup lang="ts">
  interface Props {
    isDisabled?: string[]
  }
  defineOptions({ name: 'CounterButtons' })

  const { isDisabled = [''] } = defineProps<Props>()
  const $emit = defineEmits<{
    increment: []
    decrement: []
    'reset-value': []
  }>()
</script>
<template>
  <div>
    <div class="d-flex ga-3">
      <v-btn
        color="red"
        data-testid="decrement"
        :disabled="isDisabled.includes('decrement')"
        variant="outlined"
        @click="$emit('decrement')"
        >-</v-btn
      >
      <v-btn color="blue" data-testid="increment" variant="outlined" @click="$emit('increment')"
        >+</v-btn
      >
    </div>
    <div>
      <v-btn color="error" data-testid="reset" @click="$emit('reset-value')">Reiniciar</v-btn>
    </div>
  </div>
</template>
