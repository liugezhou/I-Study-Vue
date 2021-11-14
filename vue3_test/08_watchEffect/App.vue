<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <Demo/>
  </div>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
};
</script>

<style>
</style>
