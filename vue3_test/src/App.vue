<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <h1>setup感受</h1>
    <h2>name:{{ name }}</h2>
    <h3>age:{{ age }}</h3>
    <button @click="say">点我</button>
  </div>
</template>

<script>
import { h } from "vue";
export default {
  name: "App",
  setup() {
    let name = "Tom";
    let age = "18";

    function say() {
      console.log(`${name} 今年 ${age}了！`);
    }
    return {
      name,
      age,
      say,
    };
  },
};
</script>

<style>
</style>
