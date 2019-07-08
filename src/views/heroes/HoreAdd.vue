<template>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
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
          <button @click="add" type="button" class="btn btn-success">添加</button>
        </form>
      </div>
</template>

<script>

export default {
    data() {
        return {
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    methods: {
        add () {
           this.axios
            .post('http://localhost:3000/heroes',this.formData)
            .then((res)=>{
                const status = res.status
                if (status===201) {
                    //添加成功跳转到列表组件
                    this.$router.push({name:'heroes'})
                }else {
                    alert('添加失败')
                }
            })
            .catch((err)=>{
                alert('服务器异常'+err)
            })
        }
    },
}
</script>

<style>

</style>
