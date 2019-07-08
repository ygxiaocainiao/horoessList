<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h2 class="sub-header">英雄管理</h2>
          <a class="btn btn-success" href="add.html">Add</a>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in list" :key="item.id">
                  <td>{{index+1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  <td>
                    <a href="edit.html">编辑</a>
                    &nbsp;&nbsp;
                    <a href="javascript:" @click="del(item.id)">删除</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script>
//导入axios
import axios from 'axios'
export default {
    data () {
        return {
            list:[]
        }
    },
    //组件加载完后执行
    mounted () {
        //调用方法发送请求
      this.loadData()
    },
    methods:{
        //发送请求展示应英雄
       loadData () {
           axios
           .get('http://localhost:3000/heroes')
           .then((res)=>{
            //    data数据 status http的状态码
               const {data,status} = res
               if (status===200) {
                   this.list=data
               }else {
                   alert('获取失败')
               }
           })
           .catch(err=>{
               alert('服务器异常'+err)
           }) 
       },
        //删除
       del (id) {
           if (!confirm('确认删除?')) {
               return
           }
           axios
           .delete(`http://localhost:3000/heroes/${id}`)
           .then((res)=>{
               const {status} = res
               if (status===200) {
                   alert('删除成功');
                //重新加载数据
                this.loadData();    
               }else {
                   alert('删除失败');
               }
           })
           .catch((err)=>{
               console.log('出现错误'+err)
           })
           
       }
    }
}
</script>

<style>

</style>
