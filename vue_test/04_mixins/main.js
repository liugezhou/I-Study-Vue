import Vue from 'vue';
import App from './App.vue'
import { mixin,constant } from './mixin'  //全局引入mixin
Vue.config.productionTip = false
Vue.mixin(mixins)  // 全局引入mixin
Vue.mixin(constant) //全局引入mixin
new Vue({
  render:h=>h(App)
}).$mount('#app')