<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">+1</button>
    <hr />
    <h2>当前点击鼠标的坐标为：x:{{ point.x }},y:{{ point.y }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
import usePoint from "../hooks/usePoint";
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let point = usePoint()
    //通过组合api的形式去使用生命周期钩子
    return {
      sum,
      point
    };
  },
};
</script>

<style>
</style>
