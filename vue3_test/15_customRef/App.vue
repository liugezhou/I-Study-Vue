<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <input type="text" v-model="keyWord" />
    <h3>{{ keyWord }}</h3>
  </div>
</template>

<script>
import { ref,customRef } from "vue";
export default {
  name: "App",

  setup() {
    // 自定义ref
    function myRef(value,delay){
      return customRef((track,trigger)=>{
        let timer
        return {
          get(){
            console.log(`从myRef中读取数据了，把${value}给出去了！`)
            track() //通知vue追踪value的变化
            return value
          },
          set(newVal){
            console.log(`从myRef中设置数据了，设置的为${newVal}`)
            value = newVal
            clearTimeout(timer)
            timer = setTimeout(() => {
              trigger() //通知Vue去重新解析模板
            }, delay);
          }
        }
      })
    }
    // let keyWord = ref("hello");
    let keyWord = myRef("hello",1000);
    return {
      keyWord,
    };
  },
};
</script>

<style>
</style>
