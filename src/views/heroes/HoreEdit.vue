<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">姓名</label>
            <input v-model="formData.name" type="text" class="form-control" id="exampleInputEmail1" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">性别</label>
            <select class="form-control" v-model="formData.gender">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
          </div>
          <button @click="edit" type="button" class="btn btn-success">提交</button>
        </form>
      </div>
</template>

<script>
//导入axios
// import axios from 'axios'
export default {
    //接收外部传来的数据
    props:['id'],
    data() {
        return {
            //双向绑定数据
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    mounted() {
        this.loadDataById()
    },
    methods: {
        loadDataById () {
            this.axios
            .get(`heroes/${this.id}`)
            .then((res)=>{
                const {data,status} = res
                // console.log(res)
                if (status===200) {
                    this.formData=data
                }
            })
            .catch((err)=>{
                console.log('服务器错误'+err)
            })
        },
        edit () {
            this.axios
           .put(`heroes/${this.id}`,this.formData)
           .then((res)=>{
               const {status} = res
               if (status===200) {
                   //修改成功跳转到英雄列表
                   this.$router.push({name:'heroes'})
               }
           })
        }
        
    },
}
</script>

<style>

</style>
