<template>
    <div>
      <van-nav-bar  title="正在定位..." right-text="登录|注册" left-arrow>
          <template #left>
             <van-icon name="search" size="18" color="white"/>
          </template>
          <!-- <template #right-text>
             <p color="white"></p>
          </template> -->
        </van-nav-bar>
    <!-- 轮播 -->
     <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-grid :column-num="4">
           <van-grid-item icon="photo-o" text="文字" />
           <van-grid-item icon="photo-o" text="文字" />
           <van-grid-item icon="photo-o" text="文字" />
           <van-grid-item icon="photo-o" text="文字" />
          </van-grid>
          <van-grid :column-num="4">
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid :column-num="4">
           <van-grid-item icon="photo-o" text="文字" />
           <van-grid-item icon="photo-o" text="文字" />
           <van-grid-item icon="photo-o" text="文字" />
           <van-grid-item icon="photo-o" text="文字" />
          </van-grid>
          <van-grid :column-num="4">
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
          </van-grid>
        </van-swipe-item>
         </van-swipe>
      <!--  -->
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg">
        <van-rate v-model="value" />
      </van-card>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      
    </div>
</template>
<script>
export default {
    name:"home",
    data() {
    return {
      value:4,
    };
  },
}
</script>