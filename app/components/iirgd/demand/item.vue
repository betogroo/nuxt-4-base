<script setup lang="ts">
  import type { DemandItem } from '~/schemas/features/iirgd/demand.schema'
  interface Props {
    item: DemandItem
  }
  const { item } = defineProps<Props>()
</script>

<template>
  <v-list-item color="orange" :to="{ name: 'iirgd-demands-rg-id', params: { id: item.id } }">
    <template #prepend>
      <v-icon color="red">mdi-badge-account-alert-outline</v-icon>
    </template>
    <template #append>
      <v-icon color="indigo">mdi-badge-account-alert-outline</v-icon>
    </template>

    <template #title>
      <div class="d-flex">
        <div class="text-truncate">
          {{ item.rg }}
        </div>
      </div>
    </template>
    <template #subtitle>{{ item.name }}</template>
  </v-list-item>
</template>
