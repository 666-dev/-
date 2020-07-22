<template>
  <div>
    <div class="h-bg">
      <van-image width="66px" height="66px" round class="img_position" :src="src"></van-image>
      <span class="name">{{this.$store.state.user.username}}</span>
      <div class="vip">
        <span>黄金会员</span>
      </div>
      <!-- <van-icon name="setting-o" size="24" class="setting" @click="setting"></van-icon> -->
      <!-- <van-icon name="chat-o" size="26" class="chat"></van-icon> -->
    </div>
    <!-- 绑定手机号 -->
    <van-notice-bar :scrollable="false">
      点击绑定手机号,确保账户安全
      <!-- 点击绑定 -->
      <van-button round color="#E9B765" size="small" to class="buttom">点击绑定</van-button>
    </van-notice-bar>
    <van-nav-bar @click-right="onclickright">
      <template #left>
        <span>我的订单</span>
      </template>
      <template #right>
        <span>全部订单</span>
        <van-icon name="arrow"></van-icon>
      </template>
    </van-nav-bar>
    <van-grid :border="false" :column-num="5">
      <van-grid-item>
        <van-icon name="paid" size="32" color="#01A65A" @click="onclickright"></van-icon>
        <span class="small">待付款</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="underway-o" size="32" color="#01A65A" @click="onclickright"></van-icon>
        <span class="small">待发货</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="logistics" size="32" color="#01A65A" @click="onclickright"></van-icon>
        <span class="small">待收货</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="flower-o" size="32" color="#01A65A" @click="onclickright"></van-icon>
        <span class="small">待评价</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="after-sale" size="32" color="#01A65A"></van-icon>
        <span class="small">退款/售后</span>
      </van-grid-item>
    </van-grid>
    <van-cell is-link>
      <template #title>
        <van-image :src="require('../assets/icon/extension.png')" width="18" height="18"></van-image>
        <span class="cell" @click="setting">我的</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <template #title>
        <van-image :src="require('../assets/icon/vip.png')" width="18" height="18"></van-image>
        <span class="cell">我的会员</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <template #title>
        <van-image :src="require('../assets/icon/Card-certificate.png')" width="18" height="18"></van-image>
        <span class="cell">我的卡券</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <template #title>
        <van-image :src="require('../assets/icon/care.png')" width="18" height="18"></van-image>
        <span class="cell">我的收藏</span>
      </template>
    </van-cell>
    <van-cell is-link>
      <template #title>
        <van-image :src="require('../assets/icon/address.png')" width="18" height="18"></van-image>
        <span class="cell">我的地址</span>
      </template>
    </van-cell>
    <!--  -->
    <!-- <van-grid  :column-num="4">
      <van-grid-item>
        <van-icon name="paid" size="32"></van-icon>
        <span class="small">账户余额</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="logistics" size="32"></van-icon>
        <span class="small">积分</span>
      </van-grid-item>
      <van-grid-item>
        <span class="small">0张</span>
        <span class="small">优惠券</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="description" size="32"></van-icon>
        <span class="small">我的钱包</span>
      </van-grid-item>
    </van-grid>-->
    <Foot></Foot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: ""
    };
  },
  methods: {
    onclickright() {
      console.log(sessionStorage.getItem("username"));
      this.$router.push("/order");
    },
    setting() {
      this.$router.push("/setting");
      console.log(this.$store.state.user.avatar);
      console.log(this.$store.state.user.username);
    }
  },
  mounted() {
    this.src = require("../assets/product/" + this.$store.state.user.avatar);
  }
};
</script>

<style scoped>
/* 我的下面五个cell  margin */
.cell {
  font-size: 18px;
  display: inline-block;
  margin-left: 10px;
}
/* 我的订单下划线 */
.van-hairline--bottom::after {
  border-bottom: 1px dashed #000;
}
/* 点击绑定样式 */
.buttom {
  margin-left: 28vw;
}
/* 最后一个图标的颜色 */
.van-icon-description::before {
  color: #ce842b;
}
/* 文字大小 */
.small {
  font-size: 12px;
}
/* 上部分大背景 */
.h-bg {
  position: relative;
  height: 100px;
  width: 100%;
  background: #01c07a;
}
/* 头像图片位置 */
.img_position {
  position: absolute;
  top: 15px;
  left: 20px;
}
/* 昵称位置 */
.name {
  position: absolute;
  top: 20px;
  left: 94px;
  font-size: 16px;
}
/* 设置图标位置 */
.setting {
  position: absolute;
  top: 20px;
  right: 8vw;
}
/* 会员 */
.vip {
  position: absolute;
  top: 48px;
  left: 96px;
  font-size: 16px;
  color: white;
  background-color: #c3a675;
  border-radius: 10px;
  width: 80px;
  height: 20px;
  text-align: center;
}
</style>

