<template>
  <div id="app">
    <!-- 顶部公共头部 -->
    <app-header></app-header>
   
    
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边导航 -->
        <app-sidebar></app-sidebar>
        <!-- 路由对应组件显示位置-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// 导入 AppHeader 组件
import AppHeader from './components/AppHeader.vue'
// 导入 AppSidebar 组件
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: "app",
  // 注册子组件
  components: {
      AppHeader,
      AppSidebar
  }
};
</script>

<style>

</style>
