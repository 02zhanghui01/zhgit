<template>
<div>
  
  <p class="p">硅谷外卖</p>
 <van-tabs v-model="active">
  <van-tab title="登录">
    <van-form @submit="onSubmit">
  <van-field
    v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
  <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]">
          <template #right-icon> 
        <van-switch v-model="checked1" @click="qq" />
      </template>
  </van-field>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click="clickLogin">提交</van-button>
  </div>
</van-form>
  </van-tab> 
  <van-tab title="注册">
        <van-form @submit="onSubmit">
  <van-field
    v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
  <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]">
      <template #right-icon> 
        <van-switch v-model="checked" />
      </template>

  </van-field>
  <van-field v-model="name"  name="姓名" label="姓名" placeholder="姓名" :rules="[{ required: true, message: '请填写姓名' }]" />
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
    name:"login",
  data() {
    return {
      active:2,
      username: '',
      password: '',
      name:'',
      checked:false,
      checked1:false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    clickLogin(){
      var app = this
      console.log("aaa")
      this.$http.post("/user/login",{
        "account":this.username,
	      "password":this.password
      }).then(function(res){
          console.log(res.data);
          app.name = res.data
      })
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

  },
};
</script>
<style>
.p{
  text-align:center;
  margin-top:50px;
  color:#02A774;
  font-size:30px;
}
</style>