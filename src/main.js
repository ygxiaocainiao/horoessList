import Vue from 'vue'
import App from './App.vue'
// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

Vue.config.productionTip = false

//导入axios模块
import axios from 'axios'
// 配置baseURL， 将来axios会自动把 baseURL和 get(url) 中的路径拼接起来
axios.defaults.baseURL='http://localhost:3000/'
//把axis方法添加到vue原型上
Vue.prototype.axios = axios



//导入路由模块
import router from './router'

new Vue({
  render: h => h(App),
  //配置路由对象
  router
}).$mount('#app')


