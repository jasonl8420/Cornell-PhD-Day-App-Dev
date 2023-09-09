<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue'
import LocalTips from './views/LocalTips.vue';
</script>

<template>
  <MenuBar></MenuBar>
  <RouterView />
  <!-- make nav bar a component and put it here (to have it show on all views) -->
</template>
