<template>
  <div>
    <van-nav-bar title="设置">
      <template #left>
        <van-icon name="arrow-left" color="black" size="24" @click="back"></van-icon>
      </template>
    </van-nav-bar>
    <div class="h-bg">
      <van-image
        width="66px"
        height="66px"
        round
        class="img_position"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      ></van-image>
      <span class="name">小可爱的悲伤</span>
      <div class="vip">
        <span>黄金会员</span>
      </div>
      <div></div>
      <!-- <van-icon name="chat-o" size="26" class="chat"></van-icon> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/my");
    }
  }
};
</script>

<style scoped>
.h-bg {
  position: relative;
  border-bottom: 1px solid #f2f2f2;
}
.name {
  position: absolute;
  top: 12px;
  left: 72px;
  font-size: 16px;
}
.img_position {
  width: 46px !important;
  height: 46px !important;
  position: absolute;
  top: 15px;
  left: 20px;
}
.vip {
  position: absolute;
  top: 42px;
  left: 78px;
  font-size: 16px;
  color: white;
  background-color: #c3a675;
  border-radius: 10px;
  width: 80px;
  height: 20px;
  text-align: center;
}
</style>