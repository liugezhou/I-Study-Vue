<template>
  <div>
    <h3>姓名：{{ name }}</h3>
    <h3>Person：{{ person }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>薪资：{{ job.j1.salary }}k</h3>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { reactive, toRef,ref,toRefs } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let person = reactive({
      name: "Tom",
      age: 18,
      job: {
        j1: {
          salary: 20,
        },
      },
    });

    // const name1 = person.name;
    // console.log('name1:',name1);
    // const name2 = toRef(person,'name') //只能处理一个属性
    // console.log('name2:',name2)

    const x = toRefs(person)  //可以批量处理某对象上所有属性
    console.log(x)
    // return {
    //   person,
    //   name: ref(person.name), //这种写法不是响应式的
    //   age: toRef(person,'age'),
    //   salary: toRef(person.job.j1,'salary'),
    // };
    return {
      person,
      ...toRefs(person)
    }
  },
};
</script>

<style>
</style>
