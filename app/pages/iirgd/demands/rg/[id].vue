<script setup lang="ts">
  const { params } = useRoute()
  const { demand, getDemand } = useIirgdDemand()
  getDemand(params.id)
</script>

<template>
  <div>
    {{ demand }}
  </div>
</template>
