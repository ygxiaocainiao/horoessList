//导入vue模块
import Vue from 'vue'

// 导入 HoreList 组件
import HoreList from './views/heroes/HoreList.vue'
// 导入 EquipsList 组件
import EquipsList from './views/equips/EquipsList.vue'
// 导入 HoreList 组件
import WeaponsList from './views/weapons/WeaponsList.vue'

// 导入 vue-router
import VueRouter from 'vue-router'
//配置vue的插件vue-router
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
  //精确高亮显示样式
  // https://router.vuejs.org/zh/api/#exact-active-class
  linkExactActiveClass: 'active',
  //配置路由规则
  routes:[
      {name:'home',path:'/',redirect:'/heroes'},
      {name:'heroes',path:'/heroes',component:HoreList},
      {name:'weapons',path:'/weapons',component:WeaponsList},
      {name:'equips',path:'/equips',component:EquipsList},
  ]
})

//导出路由对象
export default router