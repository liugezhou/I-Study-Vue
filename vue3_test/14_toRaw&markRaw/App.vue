<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <button @click="isShowDemo =!isShowDemo">切换</button>
    <Demo v-if="isShowDemo"/>
  </div>
</template>

<script>
import {ref} from 'vue'
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let isShowDemo = ref(true)
    return {
      isShowDemo
    }
  }
};
</script>

<style>
</style>
