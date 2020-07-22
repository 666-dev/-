<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item,index) in images" :key="index">
        <img :src="imgs[index]" @click="pre" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current+1 }}/{{total}}</div>
      </template>
    </van-swipe>
    <van-image-preview v-model="show" :showIndex="false" :images="images" @onChange="onChange"></van-image-preview>

    <!-- 商品售卖信息  -->
    <div class="title" v-for="(item,index) in product" :key="index">
      <div>
        <span>¥</span>
        <span v-text="item.price.toFixed(2)"></span>
        <span>优惠价</span>
        <p>
          <span>原价:</span>
          <span>¥{{item.origin_price}}</span>
        </p>
      </div>
      <div>
        <p v-text="item.title"></p>
      </div>
    </div>
    <div class="mes">
      <span>快递包邮</span>
      <span>福建泉州</span>
      <span>月销1213</span>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      // 轮播指示器
      current: 0,
      // 轮播图储存
      imgs: [],
      // 商品价格
      product: [],
      // 图片数量
      total: "",
      // 是否开启预览
      show: false,
      images: []
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    // 预览
    pre() {
      this.show = true;
      this.index = this.current;
    }
  },
  mounted() {
    var id = this.$route.params.id;
    this.axios.get("/details?id=" + id).then(res => {
      this.product = res.data.hot;
      // console.log(this.product);
      var imgs;
      this.product.forEach(item => {
        item.img = JSON.parse(item.img);
        imgs = item.img;
      });
      var carousel = imgs.splice(0, 4);
      // console.log(carousel);
      carousel.forEach(item => {
        item = require("../../../assets/product/" + item);
        this.imgs.push(item);
        this.images.push(item);
      });
      this.total = this.imgs.length;
      // console.log(imgs);
      // this.images.forEach(item => {
      //   item = require("../../../assets/product/" + item);
      //   this.imgs.push(item);
      // });
    });
  }
};
</script>

<style scoped>
.title {
  background-color: white;
  margin-top: -4px;
}
.title > div:first-child > span:first-child {
  margin-left: 10px;
}
.title > div:first-child > p > span {
  text-decoration: line-through;
}
.title > div > span,
.title > div:first-child > p > span {
  display: inline-block;
  margin: 4px 2px;
  color: #ff4a4a;
  font-size: 15px;
  font-weight: bold;
}
/* cell上下padding */
.van-cell--large {
  padding: 6px;
}
/* 图片大小 */
img {
  width: 100%;
}
/* 自定义轮播指示器 */
.custom-indicator {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 16px;
  color: white;
  background: #615c5c8c;
}
.mes {
  display: flex;
  background-color: white;
  justify-content: space-around;
}
.mes > span {
  display: inline-block;
  font-size: 14px;
}
</style>
