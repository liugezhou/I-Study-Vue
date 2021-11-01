export default {
  namespaced:true,
  state:{
    sum:18,
    name:'TomLiu',
    age:18,
  },
  actions:{
    addOdd({commit,state}, val) {
      if (state.sum % 2 != 0) {
        commit('add', val);
      }
    },
    addWait({commit}, val) {
      setTimeout(() => {
        commit('add', val);
      }, 1000);
    },
  },
  mutations:{
    add(state,value){
      state.sum += value
    },
    substract(state,value){
      state.sum -= value
    },
  },
  getters:{
    bigSum(state){
      return state.sum *10
    }
  }
}