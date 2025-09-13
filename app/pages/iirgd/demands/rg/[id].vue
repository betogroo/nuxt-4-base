<script setup lang="ts">
  const { params } = useRoute()
  const { demand, getDemand } = useIirgdDemand()
  // criar validatdor de paremetro
  getDemand(params.id)
</script>

<template>
  <app-container
    ><div>
      <page-title :title="`Demanda número ${demand?.id}`" />
      <div>{{ demand?.name }} - {{ demand?.rg }}</div>
    </div>
  </app-container>
</template>
