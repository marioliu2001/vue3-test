<template>
  <div class="dashboard">
    <span class="text-3xl font-bold dark:text-7xl"> {{ $t('common.main') }} </span>

    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
  </div>
</template>
<script setup>

</script>
<style scoped lang="scss">

</style>
