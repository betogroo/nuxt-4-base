<script setup lang="ts">
  definePageMeta({
    layout: 'no-nav',
  })
</script>

<template>
  <v-responsive class="fill-height bg-indigo">
    <v-container class="justify-center fill-height align-center">
      <v-sheet border class="ma-3 pa-3" height="360" width="360">
        <div class="d-flex flex-column justify-end ga-3">
          <h1 class="text-h5">Login</h1>
          <v-text-field hide-details type="email" variant="outlined" />
          <v-btn block>Login</v-btn>
        </div>
      </v-sheet>
    </v-container>
  </v-responsive>
</template>
