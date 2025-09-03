<script setup lang="ts">
  const { demands, fetchDemands } = useIirgdDemand()
  await fetchDemands()
</script>

<template>
  <v-container>
    <page-title title="Liberação RGs" />
    <iirgd-demand-list>
      <iirgd-demand-item v-for="item in demands" :key="item.id" :item="item" />
    </iirgd-demand-list>
  </v-container>
</template>
