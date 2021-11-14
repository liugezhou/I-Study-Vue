<template>
  <div>
    <h3>当前的sum：{{sum}}</h3>
    <button @click="sum++">sum ++ </button>
    <hr>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>薪资：{{ job.j1.salary }}k</h3>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { ref,reactive,toRefs,readonly,shallowReadonly } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0)
    let person = reactive({
      name: "Tom",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    // person = readonly(person)  //person不可修改了
    person = shallowReadonly(person)  //person第一层不可修改了
    return {
      sum,
      ...toRefs(person)
    }
  },
};
</script>

<style>
</style>
