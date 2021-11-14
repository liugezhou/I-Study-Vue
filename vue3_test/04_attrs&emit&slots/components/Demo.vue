<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <h1>setup感受</h1>
    <h2 v-show="person.name">name:{{ person.name }}</h2>
    <h3>age:{{ person.age }}</h3>
    <button @click="test">测试触发demo组件的Hello事件</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg"],
  emits: ["hello"],
  setup(props, context) {
    console.log("props:", props);
    console.log("context:", context);
    // console.log("context.attrs:",context.attrs); //相当于Vue2中的$attrs
    // console.log("context.emit:",context.emit); //触发自定义事件
    console.log("context.slots:",context.slots); 
    console.log();
    let person = reactive({
      name: "Test",
      age: "test",
    });
    function test() {
      context.emit("hello", 666);
    }
    return {
      person,
      test,
    };
  },
};
</script>

<style>
</style>
