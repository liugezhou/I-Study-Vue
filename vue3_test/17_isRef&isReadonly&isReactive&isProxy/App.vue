<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div class="app">
    <h3>我是App组件(祖),{{ name }},价值{{ price }}W</h3>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  readonly,
  isReactive,
  isRef,
  isReadonly,
  isProxy,
} from "vue";
export default {
  name: "App",
  setup() {
    let car = reactive({
      name: "奥迪",
      price: 28,
    });
    let name = ref("Tom");
    let cars = readonly(car);
    console.log(isReactive(car));
    console.log(isRef(name));
    console.log(isReadonly(cars));
    console.log(isProxy(cars)); //检查是否由reactive或者readonly设置的对象
    return {
      ...toRefs(car),
    };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
