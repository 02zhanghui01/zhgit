<template>
    <div>
        <van-nav-bar title="搜索"></van-nav-bar>
       <form action="/">
         <van-search v-model="value" placeholder="请输入搜索关键词" ></van-search>
       </form>
       <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
      <van-card num="2" price="￥20起送/配送费约￥5" desc="描述信息" title="商品标题" thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"/>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name:"search",
    data() {
      return {
       value: '',
    };
  },
  methods: {
    
    
  },
  components:{
    Toast
  }
}
</script>
<style>
.pc{
  border:1px solid #02A774;
}
</style>