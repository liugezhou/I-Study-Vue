<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div class="app">
    <h3>我是App组件(祖)</h3>
    <Child />
  </div>
</template>

<script>
import {reactive,toRefs,provide} from 'vue'
import Child from './components/Child'
export default {
  name: "App",
  components:{
    Child
  },
};
</script>

<style>
.app{
  background-color:gray;
  padding:10px;
}
</style>
