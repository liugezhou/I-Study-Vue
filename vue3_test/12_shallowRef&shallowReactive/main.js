// 引入的不再是Vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')