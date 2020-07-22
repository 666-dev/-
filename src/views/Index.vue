<template>
  <div>
    <!-- 组件布局  分24列栅格 -->
    <van-row>
      <van-col span="3">
        <van-icon name="scan" size="26" class="icon_scan"></van-icon>
      </van-col>
      <van-col span="18">
        <!-- 搜索框 -->
        <van-search placeholder="请输入你要搜索的商品" shape="round"></van-search>
      </van-col>
      <van-col span="3">
        <van-icon name="qr" size="26" class="icon_qr"></van-icon>
      </van-col>
    </van-row>

    <!-- 轮播图 -->
    <section class="section">
      <div>
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item v-for="(item,index) in carousel" :key="index">
            <img :src="item.img" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 福利 -->
      <!--今日爆款 -->
      <van-divider dashed>今日爆款</van-divider>

      <div class="flex">
        <div class="good" v-for="(item,index) in product" :key="index" @click="onChange">
          <router-link :to="`/details/${item.id}`">
            <img :src="require('../assets/product/'+item.img[0])" />
            <van-card
              :origin-price="item.origin_price.toFixed(2)"
              :price="item.price.toFixed(2)"
              :title="item.title"
            ></van-card>
          </router-link>
        </div>
      </div>
    </section>
    <!-- 底部导航 -->
    <Foot></Foot>
  </div>
</template>

<script>
// 定义子组件
// import Foot from '../components/Foot'
export default {
  // components:{Foot},
  data() {
    return {
      // 选中状态
      active: 1,
      // 轮播图片
      carousel: [],
      // product信息
      product: [],
      imgs: []
    };
  },
  methods: {
    onChange() {}
  },
  mounted() {
    this.axios.get("/banner").then(res => {
      // 申明变量接收传回来的参数
      var carousel = res.data.carousel;
      // 对变量这个数组进行遍历
      carousel.forEach(item => {
        item.img = require("../assets/" + item.img);
        // 遍历后的item重新添加
        this.carousel.push(item);
      });
    }),
      this.axios.get("/hot").then(res => {
        this.product = res.data.hot;
        this.product.forEach(item => {
          item.img = JSON.parse(item.img);
        });
        console.log(this.product);
      });
  }
};
</script>

<style scoped>
/* 间隔 */
/* .basespace {
  margin-top: 20px; 
  background-color: #e3e3e3;
} */
/* 底部距离 */
.section {
  margin-bottom: 50px;
  background-color: #e3e3e38a;
  height: 100%;
}
/* 左图标*/
.icon_scan {
  text-align: center;
  display: block;
  margin: 14px auto;
}
/*右图标 */
.icon_qr {
  text-align: center;
  display: block;
  margin: 14px auto;
}
/* 今日爆款 */
.van-divider {
  margin: 10px;
}
/* 商品爆款信息 */
.van-card {
  padding: 0;
  margin-left: 4%;
}
.good img {
  height: 30vh;
}
/*图片*/
img {
  width: 100%;
  display: block;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
/* 爆款下文字样式 */
.van-card__content {
  min-height: 60px;
  padding: 8px;
}
/* 现价颜色 */
.van-card__price {
  color: red;
}
/* 底部导航栏文字颜色 */
.van-nav-bar__text {
  color: #323233;
}
/* 商品样式 */
.good {
  width: 45vw;
  /* height: 30vh; */
  margin-top: 10px;
  margin-left: 12px;
}
/* 弹性 */
.flex {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
/*  */
.div-b {
  height: 31px;
  /* background-color: #F6F2EA; */
  margin-top: -5px;
}
/* card */
.van-card {
  margin: 0px;
}
.van-card:not(:first-child) {
  margin-top: 0px;
}
/* 商品属性 */
.fp {
  font-size: 14px;
  color: #a8700d;
  padding: 6px 2px 2px 6px;
}
/* 宫格文字 */
.text {
  font-size: 13px;
}
</style>