<template>
  <div class="role">
    Role
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
defineOptions({
  name: 'role'
})

onMounted(() => {
  console.log('Role onMounted')
})
</script>

<style scoped lang="scss">

</style>
