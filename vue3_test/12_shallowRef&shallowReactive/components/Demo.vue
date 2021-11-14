<template>
  <div>
    <h3>姓名：{{ name }}</h3>
    <h3>Person：{{ person }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>薪资：{{ job.j1.salary }}k</h3>
    <h3>当前的X：{{x.y}}</h3>
    <button @click="x.y++">X ++ </button>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { ref,reactive,toRefs,shallowReactive,shallowRef } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    // let person = shallowReactive({  //只考虑第一层次数据的响应式
    let person = reactive({
      name: "Tom",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    let x = shallowRef({
      y:0
    })
    
    return {
      person,
      x,
      ...toRefs(person)
    }
  },
};
</script>

<style>
</style>
