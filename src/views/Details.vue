<template>
  <div>
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
    <!-- 轮播图 -->
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item,index) in carousel" :key="index">
        <img :src="item" @click="pre" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current+1 }}/{{total}}</div>
      </template>
    </van-swipe>
    <van-image-preview v-model="show" :showIndex="false" :images="images" @onChange="onChange"></van-image-preview>

    <!-- 商品售卖信息  -->
    <div class="title">
      <div>
        <span>¥</span>
        <span>{{product.price}}</span>
        <span>优惠价</span>
        <p>
          <span>原价:</span>
          <span>¥{{product.origin_price}}</span>
        </p>
      </div>
      <div>
        <p v-text="product.title"></p>
      </div>
    </div>
    <div class="mes">
      <span>快递包邮</span>
      <span>福建泉州</span>
      <span>月销1213</span>
    </div>
    <!-- 商品显示规格类型 -->
    <van-sku
      ref="skus"
      v-model="showSku"
      :sku="sku"
      :reset-stepper-on-hide="true"
      :reset-selected-sku-on-hide="true"
      :goods="goods"
      :quota="quota"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @stepper-change="stepperChange"
      @sku-selected="skuSelected"
    ></van-sku>

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
    <!-- {{sku.tree[0].v}} -->
    <!-- 图片详情 -->
    <div v-for="(item,index) in details" :key="index">
      <img :src="item" style="width:100%" />
    </div>
    <!-- <detail></detail> -->
    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" text="首页" dot />
      <van-goods-action-icon icon="like-o" text="收藏" badge="5" />
      <van-goods-action-icon icon="share" text="分享" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" @click="showSku = true" />
      <van-goods-action-button type="danger" text="立即购买" @click="showSku = true" />
    </van-goods-action>
  </div>
</template>

<script>
import detail from "./Detail";
export default {
  components: {
    detail
  },
  data() {
    return {
      // 轮播指示器
      current: 0,
      // 轮播图储存
      carousel: [],
      // 商品
      product: [],
      // 商品单价
      price: [],
      // 图片数量
      total: "",
      // 用户选择的数量
      num:"",
      // 详情图
      details: [],
      // 是否开启预览
      show: false,
      images: [],
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
                name: "橘色"
              }
            ],
            k_s: "s1"
          },
          {
            k: "尺寸",
            v: [
              {
                name: "L"
              }
            ],
            k_s: "s2"
          }
        ], // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
        list: [
          {
            picture: "https://img.yzcdn.cn/vant/apple-2.jpg",
            price: 3333, //价格以分为单位
            s1: "橘色", // 规格类目 白色1 对应规格值 id
            s2: "L", // 规格类目 白色2 对应规格值 id
            stock_num: 20 //库存
          }
        ]
      }
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    shopping() {
      this.$router.push("/shoppingcar");
    },
    onChange(index) {
      this.current = index;
    },
    // 预览
    pre() {
      this.show = true;
      this.index = this.current;
    },
    stepperChange(value) {
      // this.num=value
      // console.log(this.num);
      // let userlist=this.sku.list
    },
    skuSelected(obj){
      // if (obj.selectedSkuComb!=null) {
      // console.log(this.$refs.skus.getSkuData());
      //   console.log(obj.selectedSkuComb.price);
      //   if (this.num>=2) {
      //      obj.selectedSkuComb.price=obj.selectedSkuComb.price*this.num
      //      console.log(obj.selectedSkuComb.price);
      //   }
      // }
    },
    onBuyClicked(sku) {
      this.$router.push("/buy");
    },
    onAddCartClicked(sku) {

      // console.log(sku);
      if (this.$store.state.user.isLogined) {
        let count = sku.selectedNum;
        // console.log(count);
        let price = (sku.selectedSkuComb.price / 100).toFixed(2);
        let total = price * count;
        console.log(total);
        // this.total = this.price * count;
        // console.log(this.total);
        let color = sku.selectedSkuComb.s1;
        let size = sku.selectedSkuComb.s2;
        let imgUrl = sku.selectedSkuComb.picture;
        var goodsDetails = {
          count: count,
          price: price,
          color: color,
          size: size,
          total: total,
          imgUrl: imgUrl,
          username: this.$store.state.user.username,
          title: this.product.title
        };
        this.axios.post("/cart", this.qs.stringify(goodsDetails)).then(res => {
          if (res.data == 1) {
            console.log(res);
            this.$toast("加入购物车成功");
            this.showSku = false;
            this.$refs.skus.resetSelectedSku();
          }
        });
      } else {
        this.$toast("请登录");
        this.showSku = false;
        this.$router.push("/login");
      }
    }
  },
  mounted() {
    var id = this.$route.params.id;
    this.axios.get("/details?id=" + id).then(res => {
      this.product = res.data.hot;
      // 颜色
      var a = JSON.parse(this.product.v);
      var b = JSON.parse(this.product.list);
      var ab = JSON.parse(this.product.vlist);
      //
      // a.forEach(item);

      var c = this.sku.tree[0].v;
      var c1 = this.sku.tree[1].v;
      var list = this.sku.list;
      // console.log(ab);

      ab.forEach(item => {
        var obj2 = {
          picture: "",
          price: "", //价格以分为单位
          s1: "", // 规格类目 白色1 对应规格值 id
          s2: "", // 规格类目 白色2 对应规格值 id
          stock_num: "" //库存
        };
        obj2.picture = item[0];
        obj2.price = item[1] * 100;
        this.price.push(obj2.price);
        obj2.s1 = item[2];
        obj2.s2 = item[3];
        obj2.stock_num = parseInt(item[4]);
        list.push(obj2);
        
      });
      list.shift()
      // console.log(c);

      b.forEach(item => {
        var obj = { id: " ", name: " " };
        obj.id = item[0];
        obj.name = item[1];
        // console.log(obj);
        c.push(obj);
      });
      // c.shift(1);
      // console.log(c);

      a.forEach(item => {
        var obj1 = { id: " ", name: " " };
        obj1.id = item[0];
        obj1.name = item[1];
        // console.log(obj1);
        c1.push(obj1);
      });
      // c1.shift(1);

      var imgs = JSON.parse(this.product.img);
      // console.log(imgs);
      var carousel = imgs.splice(0, 4);
      var details = imgs.splice(4);
      details.forEach(item => {
        item = require("../assets/product/" + item);
        this.details.push(item);
      });
      carousel.forEach(item => {
        item = require("../assets/product/" + item);
        this.carousel.push(item);
        this.images.push(item);
      });
      this.total = carousel.length;
    });
  }
};
</script>

<style scoped>
/* 导航栏 */
.van-nav-bar {
  background-color: #d0d0d045;
}
/* 标题 */
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