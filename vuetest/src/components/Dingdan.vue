<template>
    <div>
       <van-nav-bar title="订单列表"></van-nav-bar>
       <van-tabs v-model="active">
         <van-tab title="外卖订单">
           <van-card title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
         <template #title>
            <div style="margin-top:10px;margin-bottom:-36px;font-size:14px"><strong>蛟龙豆捞</strong>
               <van-icon name="arrow"/>   
            </div>      
         </template>
          <template #price>
            <span>红薯薏米粥等1件商品</span>
         </template>
         <template #footer>
            <van-button size="mini">删除订单</van-button>
            <van-button size="mini" color="#00A67C">再来一单</van-button>
        </template>
       </van-card>
       <van-card title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
         <template #title>
            <div style="margin-top:10px;margin-bottom:-36px;font-size:14px"><strong>蛟龙豆捞</strong>
               <van-icon name="arrow"/>   
            </div>      
         </template>
          <template #price>
            <span>酸辣土豆丝等4件商品</span>
         </template>
         <template #footer>
            <van-button size="mini">删除订单</van-button>
            <van-button size="mini" color="#00A67C">再来一单</van-button>
        </template>
       </van-card>
       <van-card title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
         <template #title>
            <div style="margin-top:10px;margin-bottom:-36px;font-size:14px"><strong>蛟龙豆捞</strong>
               <van-icon name="arrow"/>   
            </div>      
         </template>
          <template #price>
            <span>酸辣土豆丝等4件商品</span>
         </template>
         <template #footer>
            <van-button size="mini">删除订单</van-button>
            <van-button size="mini" color="#00A67C">再来一单</van-button>
        </template>
       </van-card>
       <van-card title thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
         <template #title>
            <div style="margin-top:10px;margin-bottom:-36px;font-size:14px"><strong>蛟龙豆捞</strong>
               <van-icon name="arrow"/>   
            </div>      
         </template>
          <template #price>
            <span>酸辣土豆丝等4件商品</span>
         </template>
         <template #footer>
            <van-button size="mini">删除订单</van-button>
            <van-button size="mini" color="#00A67C">再来一单</van-button>
        </template>
       </van-card>
         </van-tab>
         <van-tab title="待评价">内容 2</van-tab>
         <van-tab title="退款">内容 3</van-tab>
        <van-tab title="其他订单">内容 4</van-tab>
      </van-tabs>
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
export default {
    name:"dingdan",
    data(){
      return{
        active:0,
        value:4
      }
    }
}
</script>
<style>
.van-nav-bar{
  border: 1px solid #00A67C;
  background-color: #00A67C;
}
.van-button{
  border-radius: 10px;
}
</style>