<template>
  <h2>{{ msg }}</h2>
  <img alt="Vite logo" width="120" src="@/assets/vite.svg" />
  <img alt="Vue logo" width="120" src="@/assets/vue.png" />
  <img alt="Quasar logo" width="120" src="@/assets/quasar.png" />
</template>
<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
