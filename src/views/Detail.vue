<template>
  <div>
    <div v-for="(item,index) in details" :key="index">
      <img :src="item" style="width:100%" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      details: []
    };
  },
  mounted() {
    var id = this.$route.params.id;
    this.axios.get("/details?id=" + id).then(res => {
      this.product = res.data.hot;
      // console.log(this.product);
      var imgs = JSON.parse(this.product);
      this.product.forEach(item => {
        item.img = JSON.parse(item.img);
        imgs = item.img;
      });
      var details = imgs.splice(4);
      details.forEach(item => {
        item = require("../assets/product/" + item);
        this.details.push(item);
      });
    });
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