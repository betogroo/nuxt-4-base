<script setup lang="ts">
  useUserStatus('/')

  await delay(5000, 'Testando o confirm')
</script>

<template>
  <div>
    <h1>Entrando no Sistema</h1>
    <h2>Aguarde um momento enquanto conferimos a autenticação.</h2>
  </div>
</template>
