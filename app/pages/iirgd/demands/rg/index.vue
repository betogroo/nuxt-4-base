<script setup lang="ts">
  const { demands, fetchDemands, addDemand } = useIirgdDemand()
  await fetchDemands()
</script>

<template>
  <app-container>
    <div>
      <page-title title="Liberação RGs" />
      <iirgd-demand-list>
        <iirgd-demand-item v-for="item in demands" :key="item.id" :item="item" />
      </iirgd-demand-list>
      <app-btn @click="addDemand">Add Demand</app-btn>
    </div>
  </app-container>
</template>
