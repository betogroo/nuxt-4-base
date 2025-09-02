<script setup lang="ts">
  const { demands, fetchDemands } = useIirgdDemand()
  await fetchDemands()
</script>

<template>
  <v-container>
    <h1>Sistema RG</h1>
    <iirgd-demand-list>
      <iirgd-demand-item v-for="item in demands" :key="item.id" :item="item" />
    </iirgd-demand-list>
  </v-container>
</template>
