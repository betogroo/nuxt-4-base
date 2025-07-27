<script setup lang="ts">
  definePageMeta({
    name: 'CounterIndex',
  })
  const { displayNumber, incrementValue, decrementValue, resetValue, maxValue, disabled } =
    useCounter()
</script>

<template>
  <v-container class="d-flex justify-center align-center">
    <v-card class="text-center pa-4" width="400">
      <div class="d-flex flex-column justify-center align-center ga-4">
        <counter-display :display-number="displayNumber" />
        <counter-max-value-display :value="maxValue" />
        <counter-buttons
          :disabled
          @decrement="decrementValue"
          @increment="incrementValue"
          @reset-value="resetValue"
        />
      </div>
    </v-card>
  </v-container>
</template>
