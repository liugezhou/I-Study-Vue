<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div class="child">
    <h3>我是Child组件</h3>
    <Son/>
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: "Child",
  components:{
    Son
  },
};
</script>

<style>
.child{
  background-color:skyblue;
  padding:10px;
}
</style>
