<template>
  <div>
    <van-nav-bar fixed id="top_bar">
      <template #left>
        <van-icon name="arrow-left" size="24" @click="back"></van-icon>
        <div class="bg ml"></div>
      </template>
      <template #right>
        <van-icon name="shopping-cart-o" size="24" @click="shopping"></van-icon>
        <div class="bg mr"></div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/");
    },
    shopping() {
      this.$router.push("/shoppingcar");
    }
  } 
};
</script>

<style scoped>
/* 顶部导航背景 */
.van-nav-bar {
  background-color: #d0d0d045;
}
.van-nav-bar .van-icon {
  color: white;
}
.bg {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #7b7b7b;
}
.ml {
  margin-left: -2em;
}
.mr {
  margin-left: -2.1em;
}
/* 顶部导航背景图标 */
.van-hairline--bottom::after {
  border: 0px;
}
.van-cell--large .van-cell__label {
  font-size: 3.5vw;
}
</style>