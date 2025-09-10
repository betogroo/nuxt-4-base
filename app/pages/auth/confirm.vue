<script setup lang="ts">
  definePageMeta({
    layout: 'no-nav',
    name: 'Confirm',
  })
  useUserStatus('/')
</script>

<template>
  <app-container full-height>
    <div>
      <h1>Entrando no Sistema</h1>
      <h2>Aguarde um momento enquanto conferimos a autenticação.</h2>
    </div>
  </app-container>
</template>
