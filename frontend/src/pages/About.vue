<template>
  <QPage class="row justify-center" padding>
    <div class="contents">
      <HelloWorld msg="Vite + Vue 3 + Quasar" />
    </div>
  </QPage>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  }
})
</script>
<style scoped>
.contents {
  width: 700px;
}
</style>
