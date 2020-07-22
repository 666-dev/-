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
      showChange: false,
      showSort: false,
      quota: 9, //限购数量 库存旁边显示限购数
      showSku: false, //sku的框的显示 false不会自动弹出购买框
      goods: {
        // 默认商品 sku 缩略图
        picture: "https://img.yzcdn.cn/vant/apple-2.jpg"
      },
      sku: {
        // 商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色",
            v: [
              {
                id: "30349",
                name: "天蓝色",
                imgUrl: "https://img.yzcdn.cn/vant/apple-2.jpg"
              },
              {
                id: "1215",
                name: "黄色",
                imgUrl: "https://img.yzcdn.cn/vant/apple-2.jpg"
              },
              {
                id: "1255",
                name: "红色",
                imgUrl: "https://img.yzcdn.cn/vant/apple-2.jpg"
              }
            ],
            k_s: "s1"
          },
          {
            k: "尺寸",
            v: [
              {
                id: "1193",
                name: "1"
              },
              {
                id: "1194",
                name: "2"
              }
            ],
            k_s: "s2"
          }
        ], // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
        list: [
          {
            id: 2259,
            price: 120, //价格以分为单位
            s1: "1215", // 规格类目 白色1 对应规格值 id
            s2: "1193", // 规格类目 白色2 对应规格值 id
            stock_num: 20, //库存
            goods_id: 94675
          },
          {
            id: 2260,
            price: 110, //价格以分为单位
            s1: "30349",
            s2: "1194",
            stock_num: 2, //库存
            goods_id: 94755
          },
          {
            id: 2260,
            price: 110, //价格以分为单位
            s1: "30349",
            s2: "1194",
            stock_num: 2, //库存
            goods_id: 94755
          },
          {
            id: 2259,
            price: 3330, //价格以分为单位
            s1: "1255", // 规格类目 白色1 对应规格值 id
            s2: "1193", // 规格类目 白色2 对应规格值 id
            stock_num: 20, //库存
            goods_id: 96755
          },
          {
            id: 2260,
            price: 9990, //价格以分为单位
            s1: "1255",
            s2: "1194",
            stock_num: 2, //库存
            goods_id: 46755
          }
        ]
      }
    };
  },
  methods: {
    onBuyClicked(sku) {
      console.log(sku);
    },
    onAddCartClicked(sku) {
      console.log(sku);
      this.$toast("add cart:" + JSON.stringify(sku));
    }
  }
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
