<template>
    <div>
        <van-nav-bar title="搜索"></van-nav-bar>
       <form action="/">
         <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch"/>
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
    onSearch(val) {
      Toast(val);
    },
    Cancel() {
      Toast('搜索');
    },
  },
}
</script>
