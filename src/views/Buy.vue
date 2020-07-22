<template>
  <div class="big">
    <div>
      <van-nav-bar fixed id="top_bar">
        <template #left>
          <van-icon name="arrow-left" size="24" @click="back"></van-icon>
          <div class="bg ml"></div>
        </template>
      </van-nav-bar>
    </div>
    <!-- 收货地址 -->
    <div class="shdz two">
      <!-- 头像 -->
      <div class="dinwei">
        <img src="../assets/icon/quan.png" alt />
      </div>
      <!-- 姓名和电话 -->
      <div class="msg">
        <span>唐浩文</span>
        <span>18323867045</span>
      </div>
      <!-- 地址 -->
      <div class="address">
        <p>渝北区加州花园</p>
      </div>
      <!-- 右侧> -->
      <div class="right"></div>
    </div>
    <!-- 交易信息 -->
    <div class="jiaoyi two">
      <!-- 店名 -->
      <p class="name">测压家具专营店</p>
      <!-- 商品 -->
      <div class="good_image">
        <!-- 商品头像 -->
        <div class="goods_image">
          <img src="../assets/product/hot4.jpg" alt width="80px" height="80px" />
        </div>
        <p class="title">实木创意木质矮凳日式小圆凳子储物坐凳换鞋凳儿童小板凳椅包邮</p>
        <p class="money">¥146.00</p>
        <!-- 加减计算 -->
        <div>
          <van-stepper class="cla" v-model="value" theme="round" button-size="22" disable-input />
        </div>
        <p class="fh_time">发货时间:付款后48小时内</p>
      </div>
      <!-- 配送 -->
      <van-cell is-link @click="alert" class="action">
        <template #title>
          <p>公益宝贝</p>
          <p class="jz">成交后卖家将捐赠0.02元给公益宝贝计划</p>
        </template>
      </van-cell>
      <van-action-sheet v-model="show" cancel-text="确认">
        <van-cell title="基本信息"></van-cell>
        <van-cell title="品牌"></van-cell>
        <van-cell title="型号"></van-cell>
        <van-cell title="材质"></van-cell>
        <van-cell title="风格"></van-cell>
        <van-cell title="安装方式"></van-cell>
        <van-cell title="颜色分类"></van-cell>
      </van-action-sheet>
      <van-cell is-link @click="alert" class="action">
        <template #title>
          <p>配送</p>
          <p class="got">普通配送</p>
        </template>
      </van-cell>
      <van-action-sheet v-model="show" cancel-text="确认">
        <van-cell title="基本信息"></van-cell>
        <van-cell title="品牌"></van-cell>
        <van-cell title="型号"></van-cell>
        <van-cell title="材质"></van-cell>
        <van-cell title="风格"></van-cell>
        <van-cell title="安装方式"></van-cell>
        <van-cell title="颜色分类"></van-cell>
      </van-action-sheet>
      <van-cell class="action">
        <template #title>
          <p>订单备注</p>
          <p class="bz">选填,请先和商家协商一致...</p>
        </template>
      </van-cell>
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: 1
    };
  },
  methods: {
    alert() {
      this.show = true;
    },
    onSubmit() {},
    back() {
      history.go(-1);
    }
  }
};
</script>

<style scoped>
.cla {
  position: absolute;
  top: 120px;
  right: 20px;
  float: right;
  margin-right: 6px;
}
.action {
  position: relative;
  top: 18vh;
}
.van-cell {
  height: 9vh;
  align-items: center;
}
.jz {
  position: absolute;
  left: 6em;
  top: 0.7em;
  width: 58vw;
  height: 10vh;
}
.bz {
  position: absolute;
  left: 6em;
  top: 1.3em;
}
.got {
  position: absolute;
  left: 3.5em;
  top: 1.3em;
}
/* 发货时间 */
.fh_time {
  position: absolute;
  top: 10vh;
  left: 30vw;
  font-size: 12px;
  color: red;
}
/* 加减button */
.poi {
  display: inline-block;
  width: 20px;
  margin: 0 6px;
}
/* 加减计算 */
.jj {
  position: absolute;
  right: 0vw;
  top: 14vh;
}
/* 金钱 */
.money {
  position: absolute;
  left: 74vw;
  top: 18vw;
  font-size: 16px;
}
/* 商品title */
.title {
  position: absolute;
  left: 30vw;
  width: 60vw;
  /* height: 20vh; */
  font-size: 10px;
}
/* 商品头像 */
.goods_image {
  position: absolute;
  left: 4vw;
  top: 5vh;
}
.van-cell::after {
  border: 0;
}
.van-card {
  background-color: transparent;
}
/* 两个板块 */
.two {
  background-color: white;
  border-radius: 10px;
  position: relative;
}
/* 大背景 */
.big {
  background-color: #f2f2f2;
  padding: 1em;
}
/* 地址选择div */
.shdz {
  margin-top: 50px;
  height: 5em;
}
/* 定位图标 */
.dinwei {
  position: absolute;
  top: 1.2em;
  left: 1em;
  width: 20px;
  height: 20px;
}
/* 联系人信息 */
.msg {
  position: absolute;
  top: 1em;
  left: 4.5em;
}
/* 地址 */
.address {
  position: absolute;
  top: 2.6em;
  left: 4.5em;
}
/* 右侧小箭头 */
.right {
  width: 15px;
  height: 15px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
  position: absolute;
  top: 2em;
  transform: rotate(45deg);
  right: 1em;
}
/* 交易信息显示 */
.jiaoyi {
  position: relative;
  padding-top: 0.1em;
  margin-top: 1em;
  height: 45vh;
  margin-bottom: 27vh;
  /* border: 1px solid black; */
}
/* 店名 */
.name {
  margin-top: 0.4em;
  margin-left: 0.6em;
}
/* 规格 */
</style>