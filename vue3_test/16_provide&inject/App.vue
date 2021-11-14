<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div class="app">
    <h3>我是App组件(祖),{{name}},价值{{price}}W</h3>
    <Child />
  </div>
</template>

<script>
import {reactive,toRefs,provide} from 'vue'
import Child from './components/Child.vue'
export default {
  name: "App",
  components:{
    Child
  },
  setup(){
    let car = reactive({
      name:'奥迪',
      price:28
    })
    provide('car',car) //给自己的后代组件传递数据
    return {
      ...toRefs(car)
    }
  }
};
</script>

<style>
.app{
  background-color:gray;
  padding:10px;
}
</style>
