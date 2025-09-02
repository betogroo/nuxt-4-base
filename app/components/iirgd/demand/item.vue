<script setup lang="ts">
  import type { DemandItem } from '~/schemas/features/iirgd/demand.schema'
  interface Props {
    item: DemandItem
  }
  const { item } = defineProps<Props>()
  const $emit = defineEmits<{
    'toggle-item': [id: string]
    'delete-item': [id: string]
  }>()
</script>

<template>
  <v-list-item color="orange" @click="$emit('toggle-item', item.id)">
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
