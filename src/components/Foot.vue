<template>
  <div>
    <footer>
      <van-tabbar v-model="active" route>
        <van-tabbar-item to="/">
          <span>首页</span>
          <template #icon="props">
            <img :src="props.active ? icon[0].active : icon[0].inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/sort">
          <span>分类</span>
          <template #icon="props">
            <img :src="props.active ? icon[1].active : icon[1].inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/shoppingcar">
          <span>购物车</span>
          <template #icon="props">
            <img :src="props.active ? icon[2].active : icon[2].inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item to="/my">
          <span>我的</span>
          <template #icon="props">
            <img :src="props.active ? icon[3].active : icon[3].inactive" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: [
        {
          active: require("../assets/icon/home_ac.png"),
          inactive: require("../assets/icon/home.png")
        },
        {
          active: require("../assets/icon/category_ac.png"),
          inactive: require("../assets/icon/category.png")
        },
        {
          active: require("../assets/icon/cart_ac.png"),
          inactive: require("../assets/icon/cart.png")
        },
        {
          active: require("../assets/icon/mine_ac.png"),
          inactive: require("../assets/icon/mine.png")
        }
      ]
    };
  },
  // watch:{
  //   active(){
  //     if (active==0) {
  //       this.$router.push("/").catch(err=>err);
  //     }
  //   }
  // }
};
</script>

<style scoped>
/* 底部导航栏选中背景颜色
.van-tabbar-item--active {
  background-color: #feb526;
} */
</style>
