<script setup>
defineOptions({
  name: 'App'
})
</script>

<template>
  <div class="app">
    <RouterView/>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;
  //background-color: $main-bg-color;
}
</style>
