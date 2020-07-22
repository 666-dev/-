<template>
  <div>
    <van-nav-bar title="全部订单">
      <template #left>
        <van-icon name="arrow-left" color="black" size="24" @click="back"></van-icon>
      </template>
    </van-nav-bar>
    <van-tabs v-model="activeName">
      <van-tab title="全部 " name="a">内容 1</van-tab>
      <van-tab title="待付款" name="b">内容 2</van-tab>
      <van-tab title="待发货" name="c">内容 3</van-tab>
      <van-tab title="待收货" name="d">内容 3</van-tab>
      <van-tab title="待评价" name="d">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 0
    };
  },
  methods: {
    back() {
      this.$router.push("/my");
    }
  }
};
</script>

<style scoped>
</style>
