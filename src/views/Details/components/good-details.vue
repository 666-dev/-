<template>
  <div>
    <div style="margin-top:10px" v-for="(item,index) in details" :key="index">
      <img :src="item" @click="pre" />
    </div>
    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" @click="showBase = true" />
      <van-goods-action-button type="danger" text="立即购买" @click="showBase = true" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: [],
      product: []
    };
  },
  mounted() {
    var id = this.$route.params.id;
    this.axios.get("/details?id=" + id).then(res => {
      this.product = res.data.hot;
      console.log(this.product);
      var imgs;
      this.product.forEach(item => {
        item.img = JSON.parse(item.img);
        imgs = item.img;
      });
      var details = imgs.splice(4);
      console.log(details);
      console.log(imgs);
      // details.forEach(item => {
      //   item = require("../assets/product/" + item);
      //   this.details.push(item);
      // });
    });
  }
};
</script>

<style>
</style>