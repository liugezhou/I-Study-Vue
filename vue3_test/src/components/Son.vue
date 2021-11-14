<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div class="son">
    <h3>我是Son组件(祖)</h3>
    {{ car.name }} - {{car.price}}
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Son",
  setup() {
    let car = inject("car");
    return { car };
  },
};
</script>

<style>
.son {
  background-color: yellowgreen;
  padding: 10px;
}
</style>
