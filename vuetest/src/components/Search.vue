<template>
    <div>
        <van-nav-bar title="搜索"></van-nav-bar>
       <form action="/">
        <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            action-text="搜索"
            @search="onSearch"
          />
          
        </form> 
       <!-- <van-card num="2" title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
         <template #desc>
           <span style="float:left" >
              <b><van-tag color="yellow" text-color="black" size="small" style="margin-top:19px">品牌</van-tag></b>
           </span>
         </template>
         <template #title>
            <div style="margin-left:40px;margin-bottom:-36px;font-size:14px"><strong>嘉禾一品</strong></div>          
         </template>
         <template #tags>
           <br>
           <div style="float:right;margin-top:5px;overflow:hidden">
             <b><van-tag color="yellow" text-color="black" size="small">保</van-tag> </b>
             <b> <van-tag color="yellow" text-color="black" size="small">准</van-tag> </b>
              <b><van-tag color="yellow" text-color="black" size="small">票</van-tag></b>
             </div> <br>
              <div style="margin-top:15px;">
                <van-rate v-model="value" :count="5" size="12px"/> &nbsp;
                <span style="color:orange;margin-right:5px;">月销量256单</span>
                <van-tag plain type="danger" color="orange" style="float:right">联想教育</van-tag>
              </div>
          </template>
          <template #price>
            <span>￥20起送/配送费约￥5</span>
         </template>
       </van-card>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
     -->
           <div v-for="item in merchant" :key="item.id">
  <a :href="'/#/particulars/'+item.id">
<van-card
  num="2"
  :price="item.minPrice+'起送/配送费约'+'¥'+item.transportationPrice" 
  :desc="item.notice"
  :title="item.name"
  :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo"
>
  <template #tags>
 <van-rate v-model="item.goodsScore" /><span>{{item.score}}</span>
   <template >
  <span class="sp">  月销量:{{item.sales}}</span>
  </template>
     <template>
 <van-tag color="#F6CC98" plain>联想教育</van-tag>
  </template>
  </template>
</van-card>
</a>
</div> 
    <div>
        <van-tabbar v-model="active">
         <van-tabbar-item icon="home-o" to="/home">外卖</van-tabbar-item>
         <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
         <van-tabbar-item icon="friends-o" to="/dingdan">订单</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    
    </div>
    
</template>
<script>

import { Toast } from 'vant';
export default {
    name:"search",
    data() {
       return {
          Category:"",//存储请求的图片
          active:0,
          merchant:"",//商家信息
          data:'',
          value:''
    };
  },
  created(){
    var app=this
   this.$http.get("/biz/queryAllShopsInfo").then(function(res){
       console.log(res.data)
       app.merchant=res.data
   }) 
},
methods:{
  onSearch() {
      Toast('搜索');
    },
},

//守卫回调函数，组件创建之前执行该函数
    beforeRouteEnter(to,from,next){
      next(function(vm){
        //发送ajax，拿到九宫格请求数据
        vm.$http.post("/biz/queryBigCategory").then(function(res){
          console.log(res.data)
          //将数值赋值给data
          vm.data = res.data
        })
      })
    },

//组件创建之后执行该函数
     beforeRouteUpdate(to,from,next){
       var app = this;
       this.$http.post('/biz/queryBigCategory').then(function(res){
         app.data = res.data
       })
      next()
     }
}
</script>
<style>
.pc{
  border:1px solid #02A774;
}
</style>