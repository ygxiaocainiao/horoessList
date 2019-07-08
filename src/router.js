//导入vue模块
import Vue from 'vue'

// 导入 HoreList 组件
import HoreList from './views/heroes/HoreList.vue'
// 导入 EquipsList 组件
import EquipsList from './views/equips/EquipsList.vue'
// 导入 HoreList 组件
import WeaponsList from './views/weapons/WeaponsList.vue'

//导入 HoreAdd 组件
import HoreAdd from './views/heroes/HoreAdd.vue'
// 导入 vue-router
import VueRouter from 'vue-router'
//配置vue的插件vue-router
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
  //精确高亮显示样式
  // https://router.vuejs.org/zh/api/#exact-active-class
  // linkExactActiveClass: 'active',

    // 当url中的路由地址，包含a标签的href的路由地址的时候，添加类样式
    linkActiveClass: 'active',
  //配置路由规则
  routes:[
      {name:'home',path:'/',redirect:'/heroes'},
      {name:'heroes',path:'/heroes',component:HoreList},
      {name:'weapons',path:'/weapons',component:WeaponsList},
      {name:'equips',path:'/equips',component:EquipsList},
      {name:'heroesadd',path:'/heroes/add',component:HoreAdd},

  ]
})

//导出路由对象
export default router