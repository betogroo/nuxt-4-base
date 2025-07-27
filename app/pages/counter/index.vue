<script setup lang="ts">
  definePageMeta({
    name: 'CounterIndex',
  })
  const { displayNumber, incrementValue, decrementValue, resetValue, maxValue } = useCounter()
</script>

<template>
  <v-container class="d-flex justify-center align-center">
    <v-card class="text-center pa-4" width="400">
      <div class="d-flex flex-column justify-center align-center">
        <counter-display :display-number="displayNumber" />
        <h3 data-testid="maxDisplay">Max: {{ maxValue }}</h3>
        <counter-buttons
          @decrement="decrementValue"
          @increment="incrementValue"
          @reset-value="resetValue"
        />
      </div>
    </v-card>
  </v-container>
</template>
