<template>
  <!-- Vue3组件中模版结构可以没有根标签 -->
  <div>
    <h1>setup感受</h1>
    firstName:<input type="text" v-model="person.firstName" /><br />
    lastName:<input type="text" v-model="person.lastName" /><br />
    fullname:{{ person.fullName }} <br />
    fullname:<input
      type="text"
      v-model="person.fullName"
    />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  setup() {
    //数据
    let person = reactive({
      firstName: "Tom",
      lastName: "Liu",
    });
    //计算属性--简写形式，没有考虑计算属性被修改的情况
    // person.fullName = computed(()=>{
    //   return person.firstName + '-' +  person.lastName
    // })

    //计算属性--完整写法，考虑读和写
    person.fullName = computed({
      get(){
        return person.firstName + '-' +  person.lastName
      },
      set(val){
        const nameArr = val.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    });
    return {
      person,
    };
  },
};
</script>

<style>
</style>
