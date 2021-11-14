<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div class="child">
    <h3>我是Child组件</h3>
    {{sum}}
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "Child",
  async setup(){
    let sum = ref(0)
    const p =  new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve({sum})
      }, 1000);
    })
    return await p
  }
};
</script>

<style>
.child{
  background-color:skyblue;
  padding:10px;
}
</style>
