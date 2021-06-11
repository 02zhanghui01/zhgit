<template>
    <div>
      <van-nav-bar  title="正在定位..." right-text left-arrow @click-right="clickRight">
          <template #left>
             <van-icon name="search" size="18" color="white"/>
          </template>
          <template #right>
               <a href="#/login" style="color:white;">登录|</a>
               <a href="#/register" style="color:white;">注册</a>
          </template>
        </van-nav-bar>
    <!-- 轮播 -->
     <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
        <van-swipe-item>
          <van-grid :column-num="4" >
           <!-- 循环遍历数据data，将其渲染到页面上 -->
           <van-grid-item  :text="item.name" v-for="item in data" :key="item.id"
            :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo" />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          
          <van-grid>
            <van-grid-item  :text="item.name" v-for="item in data" :key="item.id"
            :icon="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.photo" />
        </van-grid>
        </van-swipe-item>

         </van-swipe>
      <!--  -->
      <div style="margin-top:10px;">
        <van-icon name="bars"></van-icon>
        <span>附近商家</span>
      </div>
      <van-card num="2" price title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
         <template #desc>
           <span style="margin-left:-20px;">
             <van-tag plain type="warning">品牌</van-tag><br>
           </span>
         </template>
         <template #title>
            <div style="margin-left:20px;margin-bottom:-33px;"><b>嘉禾一品</b></div>
            <div style="border:1px solid black;margin-left:200px;">
             <van-tag type="warning" text-color="black" size="normal">保</van-tag> 
              <van-tag type="warning" text-color="black" size="normal">准</van-tag> 
              <van-tag type="warning" text-color="black" size="normal">票</van-tag>
             </div> 
         </template>
         <template #tags>
           <span style="margin-left:-20px;">
             <van-rate v-model="value" :count="5"></van-rate> 
          </span>
          <span>4.5</span>
             <span style="color:orange;margin-right:10px">月销量256单</span>
             <span style="margin-left:10px;">
               <van-tag plain type="warning">联想教育</van-tag>
             </span> 
         </template>
         <template #price>
            <span style="margin-left:-20px;">20起送/配送费约￥5</span>
         </template>
       </van-card>
     <van-card num="2" price title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
         <template #desc>
           <span style="margin-left:-20px;">
             <van-tag plain type="warning">品牌</van-tag><br>
           </span>
         </template>
         <template #title>
            <div style="margin-left:20px;margin-bottom:-33px;"><b>佰家粥铺</b></div>
            <div style="border:1px solid black;margin-left:200px;">
             <van-tag type="warning" text-color="black" size="normal">保</van-tag> 
              <van-tag type="warning" text-color="black" size="normal">准</van-tag> 
              <van-tag type="warning" text-color="black" size="normal">票</van-tag>
             </div> 
         </template>
         <template #tags>
             <span style="margin-left:-20px;">
             <van-rate v-model="value" :count="5"></van-rate> 
          </span> 
             <span>4.3</span>
             <span style="color:orange;margin-right:10px">月销量130单</span>
             <span style="margin-left:10px;">
               <van-tag plain type="warning">联想教育</van-tag>
             </span>
         </template>
            <template #price>
            <span style="margin-left:-20px;">20起送/配送费约￥5</span>
         </template>
       </van-card>

      <van-card num="2" price title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
         <template #desc>
           <span style="margin-left:-20px;">
             <van-tag plain type="warning">品牌</van-tag><br>
           </span>
         </template>
         <template #title>
            <div style="margin-left:20px;margin-bottom:-33px;"><b>蛟龙豆捞</b></div>
            <div style="border:1px solid black;margin-left:200px;">
             <van-tag type="warning" text-color="black" size="normal">保</van-tag> 
              <van-tag type="warning" text-color="black" size="normal">准</van-tag> 
              <van-tag type="warning" text-color="black" size="normal">票</van-tag>
             </div> 
         </template>
         <template #tags>
             <span style="margin-left:-20px;">
             <van-rate v-model="value" :count="5"></van-rate> 
          </span>
             <span>4.9</span> 
             <span style="color:orange;margin-right:10px">月销量500单</span> 
             <span style="margin-left:10px;">
               <van-tag plain type="warning">联想教育</van-tag>
             </span>
         </template>
         <template #price>
            <span style="margin-left:-20px;">20起送/配送费约￥5</span>
         </template>
       </van-card>
      
    </div>
</template>
<script>
export default {
    name:"home",
    data() {
       return {
          value:4,
          data:'',

    };
  },
  methods:{
    clickRight(){
        this.$router.push('/login')
    }
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