<template>
  <div class="bg">
    <div>
      <van-nav-bar title="购物车" right-text="删除" @click-right="del(result)" fixed></van-nav-bar>
      <van-empty v-if="goods.length==0" description="小主,你的购物车还是空空的......" />
      <div v-else style="margin-top:40px;">
        <van-checkbox-group
          style="margin-bottom:110px;margin-top:46px;padding-top:1px"
          v-model="result"
          ref="checkboxGroup"
          @change="change"
        >
          <div class="check" v-for="(item,index) of goods" :key="index">
            <div class="checkbox" @click="change(index)">
              <van-checkbox :name="index"></van-checkbox>
            </div>
            <div></div>
            <div class="goods">
              <div class="img">
                <img :src="item.imgUrl" alt />
              </div>
              <div class="des">
                <p>{{item.title}}</p>
                <p>
                  {{item.exterior}}
                  <span style="margin-left:10px">{{item.size}}</span>
                </p>
                <p>
                  <span>￥</span>
                  {{item.total}}
                  <van-stepper
                    class="cla"
                    :value="item.count"
                    theme="round"
                    @plus="plus(item)"
                    @minus="minus(item)"
                    button-size="22"
                    disable-input
                  />
                </p>
              </div>
            </div>
          </div>
        </van-checkbox-group>
        <van-submit-bar :price="price" button-text="提交订单" @submit="onSubmit" class="submit">
          <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
        </van-submit-bar>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      goods: [],
      result: [],
      checked: false
    };
  },
  mounted() {
    // console.log(typeof this.$store.state.user.username);
    this.axios
      .get("/shopingCar?username=" + this.$store.state.user.username)
      .then(res => {
        this.goods = res.data;
        console.log(this.goods);
      });
  },
  methods: {
    onSubmit() {
      this.$router.push("/buy");
    },
    plus(item) {
      // console.log(item);
      item.coount = ++item.count;
      item.total = item.count * item.price;
      var totalPrice=0
      this.result.forEach(item=>{
        // console.log(item.total);
        totalPrice+=this.goods[item].total*100
        this.price=totalPrice;
      })
    },
    minus(item) {
      item.coount = --item.count;
      item.total = item.count * item.price;
      var totalPrice=0
      this.result.forEach(item=>{
        // console.log(item.total);
        totalPrice+=this.goods[item].total*100
        this.price=totalPrice;
      })
    },
    change() {
      if (this.result.length==0) {
        this.price=0
      }
      // console.log(index);
      let totalPrice=0
      this.result.forEach(item => {
        totalPrice += this.goods[item].total * 100;
        this.price = totalPrice;
      });

      // if (this.result) {
      //   this.result.forEach(item=>{
      //     this.price += this.goods[item].total * 100;
      //   })

      // }else{
      //   this.price=0;
      // }
    },
    del(result) {
      // console.log(result);
      result.forEach(item => {
        // console.log(item);
        // console.log(this.goods[item].total);
        this.axios.get("/delete?id=" + this.goods[item].id).then(res => {
          //  console.log(res.data);
          if (res.data == 1) {
            this.$toast("删除成功");
            this.axios
              .get("/shopingCar?username=" + this.$store.state.user.username)
              .then(res => {
                this.goods = res.data;
                console.log(this.goods);
                this.result = [];
              });
          }
        });
      });
    },
    checkAll() {
      if (this.result.length == this.goods.length) {
        console.log("a");
        this.checked = false;
        this.$refs.checkboxGroup.toggleAll();
      } else {
        this.$refs.checkboxGroup.toggleAll(true);
      }
    }
  },
  watch: {
    result() {
      if (this.result.length == this.goods.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>

<style>
.bg {
  background-color: #f2f2f2;
  height: 600px;
}
.check {
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
  display: flex;
  height: 100px;
  background-color: white;
}
.checkbox {
  margin: 6px;
}
.goods {
  display: flex;
}
.des > p {
  margin-left: 6px;
  margin-right: 6px;
  font-size: 12px;
}
.des > p:nth-child(2) {
  margin-top: 10px;
  background-color: #f2f2f2;
  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.des > p:last-child {
  margin-top: 20px;
  font-size: 18px;
  color: red;
  font-weight: 500;
}
.des > p:last-child > span {
  font-size: 10px;
  font-weight: 500;
}
.img > img {
  border-radius: 10px;
  width: 90px;
}
.cla {
  float: right;
  margin-right: 6px;
}
/* 提交 */
.submit {
  margin-bottom: 50px;
}
/* 空状态 */
.van-empty {
  padding: 20vh 0;
}
/* 编辑的字体颜色 */
.van-nav-bar__text {
  color: #8f9397 !important;
}
</style>