<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <Demo msg="你好啊" name="Tom" @hello="showHelloMsg">
      <template v-slot:liugezhou>
         <span>Vue3</span>
      </template>
     
    </Demo>
  </div>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup(props) {
    function showHelloMsg(val) {
      alert("子组件触发了事件，我收到的参数是：" + val);
    }
    return {
      showHelloMsg,
    };
  },
};
</script>

<style>
</style>
