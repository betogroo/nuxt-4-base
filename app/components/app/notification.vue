<script setup lang="ts">
  import { useNotificationStore } from '~/stores/notification'

  const notification = useNotificationStore()
</script>

<template>
  <v-snackbar
    v-model="notification.show"
    :color="notification.color"
    location="top right"
    timeout="3000"
  >
    {{ notification.message }}
  </v-snackbar>
</template>
