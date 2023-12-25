<template>
  <QLayout view="hHh lpR fFf">
    <QHeader class="bg-primary" elevated>
      <QToolbar>
        <QToolbarTitle>
          <router-link to="/">
            <QAvatar>
              <img src="@/assets/logo.svg" />
            </QAvatar>
          </router-link>
          <router-link
            to="/"
            class="text-white"
            style="text-decoration: none; vertical-align: middle"
            >&nbsp;{{ title }}
          </router-link>
        </QToolbarTitle>
        <QSpace />
        <QBtn stretch flat label="About" to="/about" />
      </QToolbar>
    </QHeader>
    <QPageContainer>
      <router-view />
    </QPageContainer>
  </QLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const title = ref(import.meta.env.VITE_APP_TITLE)
</script>
