<script setup lang="ts">
  import type { BackgroundColor } from '~/schemas'

  interface Props {
    background?: BackgroundColor
    fullHeight?: boolean
    justify?: 'center' | 'around' | 'start'
  }
  const { background = 'bg-white', fullHeight = false, justify = 'start' } = defineProps<Props>()

  const justifyMap = {
    start: 'justify-start',
    center: 'justify-center',
    around: 'justify-space-around',
  } as const

  const justifyClass = computed(() => justifyMap[justify])
</script>

<template>
  <v-responsive :class="['fill-height', background]">
    <v-container :class="['d-flex', 'align-center', justifyClass, { 'fill-height': fullHeight }]">
      <slot />
    </v-container>
  </v-responsive>
</template>
