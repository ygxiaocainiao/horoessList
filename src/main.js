import Vue from 'vue'
import App from './App.vue'
// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

Vue.config.productionTip = false
// 导入 HoreList 组件
import HoreList from './views/heroes/HoreList.vue'

// 导入 vue-router
import VueRouter from 'vue-router'
//配置vue的插件vue-router
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
  //配置路由规则
  routes:[
      {name:'home',path:'/',redirect:'heroes'},
      {name:'heroes',path:'/heroes',component:HoreList},
  ]
})

new Vue({
  render: h => h(App),
  //配置路由对象
  router
}).$mount('#app')
