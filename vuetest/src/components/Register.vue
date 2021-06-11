<template>
    <div>
       <van-tabs v-model="active">
  <van-tab title="注册">
    <van-form @submit="onSubmit">
  <van-field
    v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
  <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]"/>
  
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="clickRegister">注册</van-button>
  </div>

</van-form>
  </van-tab>
 </van-tabs>
</div>
</template>
<script>
export default {
    name:"register",
    data() {
       return {
      active:2,
      username: '',
      password: '',

    };
    },
    methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    clickRegister(){
      var app = this
      console.log("aaa")
      this.$http.post("/user/register",{
        "account":this.username,
	      "password":this.password
      }).then(function(res){
          console.log(res.data);
          app.name = res.data
      })
    }
    }
}
</script>