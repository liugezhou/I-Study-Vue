import Vue from 'vue'
import Vuex from 'vuex';
import CountAbout from './CountAbout'
import PersonAbout from './PersonAbout'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    CountAbout,
    PersonAbout
  }
})