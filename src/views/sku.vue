<template>
  <div>
    <!-- 商品显示规格类型 -->
    <van-sku
      v-model="showSku"
      :sku="sku"
      :goods="goods"
      :quota="quota"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <van-cell class="sec" @click="showSku = true" is-link>
      <span class="mr">选择</span>
      <span>选择,颜色,分类</span>
    </van-cell>

    <van-cell class="col" @click="showSort = true" is-link>
      <span class="mr">参数</span>
      <span class="ins">参数,分类</span>
    </van-cell>
    <van-action-sheet v-model="showSort" cancel-text="取消">
      <van-cell title="基本信息"></van-cell>
      <van-cell title="品牌"></van-cell>
      <van-cell title="型号"></van-cell>
      <van-cell title="材质"></van-cell>
      <van-cell title="风格"></van-cell>
      <van-cell title="安装方式"></van-cell>
      <van-cell title="颜色分类"></van-cell>
    </van-action-sheet>

    <van-cell class="sec" @click="showChange = true" is-link>
      <span class="mr">保障</span>
      <span>假一赔十·退货运费险·上门取货·极速退款</span>
    </van-cell>
    <van-action-sheet v-model="showChange" cancel-text="取消">
      <van-cell title="基本信息"></van-cell>
      <van-cell title="品牌"></van-cell>
      <van-cell title="型号"></van-cell>
      <van-cell title="材质"></van-cell>
      <van-cell title="风格"></van-cell>
      <van-cell title="安装方式"></van-cell>
      <van-cell title="颜色分类"></van-cell>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  
};
</script>

<style scoped>
.van-cell::after {
  border: 0px;
}
.van-cell {
  padding: 4px 6px;
}
.sec {
  background: white;
  margin-top: 10px;
}
.mr {
  margin-right: 4px;
}
.col {
  background-color: white;
}
.col :first-child {
  display: block;
  float: left;
}
.ins {
  display: block;
  width: 54px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
