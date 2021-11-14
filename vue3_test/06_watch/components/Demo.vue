<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我 + 1</button>
    <h2>信息为{{ msg }}</h2>
    <button @click="msg += '!'">点我 + 1</button>
    <h3>姓名：{{person.name}}</h3>
    <h3>年龄：{{person.age}}</h3>
    <h3>薪资：{{person.job.j1.salary}}k</h3>
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { ref, watch,reactive } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name:'Tom',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // 监视ref
    //监视ref定义的多个响应式数据--多个watch
    // watch(sum, (n, o) => {
    //   console.log("sum值变了", n, o);
    // });
    // watch(msg, (n, o) => {
    //   console.log("msg值变了", n, o);
    // });

    //监视多个响应式数据的另一种写法
    // watch(
    //   [sum, msg],
    //   (n, o) => {
    //     console.log(n, o);
    //   },
    //   {
    //     immediate: true,
    //   }
    // );

    /**
     * 监视reactive函数所定义的响应式数据
     * 1.此处无法正确获得oldValue
     * 2.强制开启深度监视deep，配置无效
     */
    // watch(person,(n,o)=>{
    //   console.log(n,o)
    // })

    // 监视reactive定义的某一个属性
    // watch(person.age,(n,o)=>{ //无效
    //   console.log('person.age改变了！',n,o)
    // })
    //  watch(()=>person.age,(n,o)=>{
    //   console.log('person.age改变了！',n,o)
    // })


    //  监视reactive定义的一个响应式数据中的某些属性
    // watch([()=>person.name,()=>person.age],(n,o)=>{
    //   console.log('person中的name或者age发生改变了：',n,o)
    // })


    //特殊情况
    watch(()=>person.job,(n,o)=>{
      console.log('person中的job发生改变了：',n,o)
    },{deep:true})
    return {
      sum,
      msg,
      person
    };
  },
};
</script>

<style>
</style>
