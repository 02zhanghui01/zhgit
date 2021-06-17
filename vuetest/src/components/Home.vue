<template>
    <div>
      <div class="amap-page-container">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
      <div class="toolbar">
        <!-- <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span> -->
      </div>
    </div>
      <van-nav-bar :title="positionAddress ?positionAddress :'正在定位...'">
          <template #left>
             <van-icon name="search" size="18" color="white"/>
          </template>
          <template #right>
               <a href="#/login" style="color:white;">登录|注册</a>
          </template>
        </van-nav-bar>
    <!-- 九宫格 -->
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

        <van-tabbar v-model="active">
         <van-tabbar-item icon="home-o" to="/home">外卖</van-tabbar-item>
         <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
         <van-tabbar-item icon="friends-o" to="/dingdan">订单</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/user">我的</van-tabbar-item>
      </van-tabbar>

      <!--  -->
      <div style="margin-top:10px;">
        <van-icon name="bars"></van-icon>
        <span>附近商家</span>
      </div>
      
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

    </div>
</template>
<script>
export default {
    name:"home",
    data() {
      let self = this;
       return {
          Category:"",//存储请求的图片
          active:0,
          merchant:"",//商家信息
          data:'',
          
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                console.log(result);
                // console.log(result.addressComponent.township);
                if (result && result.position) {
                  var len = result.addressComponent.township.length;
                  var index = result.formattedAddress.indexOf(
                    result.addressComponent.township
                  );
                  self.positionAddress = result.formattedAddress.substring(
                    index + len
                  );
                  // self.lng = result.position.lng;
                  // self.lat = result.position.lat;
                  // self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            },
          },
        },
      ],

    };

   

  },
  created(){
    var app=this
   this.$http.get("/biz/queryAllShopsInfo").then(function(res){
       console.log(res.data)
       app.merchant=res.data
   }) 
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