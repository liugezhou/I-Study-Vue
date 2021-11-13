<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <h1>setup感受</h1>
    <h2 v-show="person.name">name:{{ person.name }}</h2>
    <h3>age:{{ person.age }}</h3>
    <h4>type:{{person.job.type}}</h4>
    <h4>salary:{{person.job.salary}}</h4>
    <h4>Test:{{person.job.a.b.c}}</h4>
    <h4>hoppy:{{person.hoppy}}</h4>
    <h4 v-show="person.sex">sex:{{person.sex}}</h4>
    <button @click="update">修改人的信息</button>
    <button @click="add">添加一个sex属性</button>
    <button @click="deleteT">删除一个name属性</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // let name = ref("test");
    // let age = ref("test");
    // let job = reactive({
    //   type:'test',
    //   salary:'test',
    //   a:{
    //     b:{
    //       c:'test'
    //     }
    //   }
    // })
    // let hoppy = reactive(['test','test','test'])
    let person = reactive({
      name:'Test',
      age:'test',
      job:{
        type:'test',
        salary:'Test',
        a:{
          b:{
            c:'Test'
          }
        }
      },
      hoppy:['Test','Test','Test']
    })
    function add(){
      person.sex = "male" //this.$set(person,'sex','male')   Vue.set()
    
    }
    function deleteT(){
      delete person.name //this.$delete(person,'name')  Vue.delete()
    }
    function update() {
      person.name = 'Name'
      person.age = 'Age'
      person.job.type = 'Type'
      person.job.salary = 'salary'
      person.job.a.b.c = 'c'
      person.hoppy[0] = 'hoppy'
    }
    return {
      person,
      update,
      add,
      deleteT
    };
  },
};
</script>

<style>
</style>
