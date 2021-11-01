import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
  
  namespaced:true,
  state:{
    personList:[
      {id:'001',name:'Tom'}
    ]
  },
  actions:{
    addPersonWang(context,val){
      if(val.name.indexOf('王')=== 0){
        context.commit('ADD_PERSON',val)
      }else{
        alert('添加的人必须姓王')
      }
    },
    addPersonServer(context){
      axios.get('https://api.uixsj.cn/hitokoto/get').then(res=>{
        console.log(res)
        context.commit('ADD_PERSON',{id:nanoid(),name:res.data})
      },err=>{
        alert('第三方服务出错！')
      })
    }
  },
  mutations:{
    ADD_PERSON(state,person){
      state.personList.unshift(person)
    }
  },
  getters:{
    firstPersonName(state){
      return state.personList[0].name
    }
  }
}