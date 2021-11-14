<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我 + 1</button>
    <h2>信息为{{ msg }}</h2>
    <button @click="msg += '!'">点我 + 1</button>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <h3>薪资：{{ person.job.j1.salary }}k</h3>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { ref, watch, reactive,watchEffect } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "Tom",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // watch(
    //   sum,
    //   (n, o) => {
    //     console.log("sum changed", n, o);
    //   },
    //   { deep: true, immediate: true }
    // );

    watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect(所指定的回调执行力了！)')
      
    })
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>
