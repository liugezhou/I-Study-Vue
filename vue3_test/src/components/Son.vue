<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div class="son">
    <h3>我是Son组件</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  name: "Son",
  components:{
    Dialog
  }
};
</script>

<style>
.son {
  background-color: yellowgreen;
  padding: 10px;
}
</style>
