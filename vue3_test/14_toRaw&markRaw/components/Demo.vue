<template>
  <div>
    <h3>当前的sum：{{sum}}</h3>
    <button @click="sum++">sum ++ </button>
    <hr>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h3>薪资：{{ job.j1.salary }}k</h3>
    <h3 v-show="person.car">Car：{{ person.car }}</h3>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRowPerson">输入最原始的person</button>
    <br/>
    <br/>
    <button @click="addCar">添加一台车</button>
    <button @click="person.car.name+='!'">切换车名字</button>
    <button @click="changePrice">切换车价格</button>
  </div>
</template>

<script>
import { ref,reactive,toRefs,toRaw,markRaw } from "vue";
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
      }
    });
    function showRowPerson(){
      // 将reactive生成的响应式对象传为普通对象
      console.log(toRaw(person))
    }
    function addCar(){
      let car = {name:'奥迪Q1',price:30}
      // 标记一个对象，使其拥有不会成为响应式对象[应用场景：第三方类库]
      person.car = markRaw(car)  //car永远不会成为响应式的数据
    }
    function changePrice(){
      person.car.price++
      console.log(person)
    }
    return {
      sum,
      person,
      ...toRefs(person),
      showRowPerson,
      addCar,
      changePrice
    }
  },
};
</script>

<style>
button{
  margin:20rpx;
  padding: 20rpx;
}
</style>
