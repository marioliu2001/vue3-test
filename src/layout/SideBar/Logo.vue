<script setup>
defineOptions({
  name: 'Logo'
})
import {getImageUrl} from "@/utils/getImageUrl.js"
import useLayoutStore from "@/stores/modules/layout.js"
import {storeToRefs} from "pinia"
/** 引入animate.css */
import 'animate.css'

const layoutStore = useLayoutStore()
const {isCollapse} = storeToRefs(layoutStore)
</script>

<template>
  <div class="logo">
    <img class="logo-image" :src="getImageUrl('logo.png')" alt="logo.png" />
    <Transition enter-active-class="animate__animated animate__fadeInDown" mode="out-in">
      <h1 class="logo-text" v-if="!isCollapse">JiAdmin</h1>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: $sidebar-bg-color;

  &-image {
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }
  &-text {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
}
</style>