<script setup lang="ts">
  import type { DemandItem } from '~/schemas/features/iirgd/demand.schema'
  interface Props {
    item: DemandItem
  }
  const { item } = defineProps<Props>()

  const statusColor = computed(() => {
    const colors: Record<string, string> = {
      liberado: 'primary',
      consultado: 'blue',
      emitido: 'green',
    }
    return colors[item.status] || 'gray'
  })
</script>

<template>
  <v-list-item
    :base-color="statusColor"
    :to="{ name: 'iirgd-demands-rg-id', params: { id: item.id } }"
  >
    <template #prepend>
      <Icon name="line-md:file" size="2em" />
    </template>
    <template #append>
      <v-icon>mdi-badge-account-alert-outline</v-icon>
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
