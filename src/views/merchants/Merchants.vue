<template>
  <div>
    <!-- <van-uploader v-model="fileList" multiple></van-uploader>
    <br />
    
    <van-uploader :after-read="afterRead" />-->
    标题:
    <input type="text" v-model="title" />
    <span id="title"></span>
    <br />原价:
    <input type="text" v-model="origin_price" />
    <span id="origin_price"></span>
    <br />现价:
    <input type="text" v-model="price" />
    <span id="price"></span>
    <br />商品展示图片:
    <input type="file" id="imgs_details" multiple />
    <van-button type="primary" @click="update">上传</van-button>
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      title: "",
      origin_price: "",
      price: ""
    };
  },
  methods: {
    update() {
      var formData = new FormData();
      var arr = document.getElementById("imgs").files;
      if (arr.length) {
        for (var n = 0; n < arr.length; n++) {
          console.log(arr);
          formData.append("avatar", arr[n]);
        }
        formData.append("avatar", this.title);
        formData.append("avatar", this.origin_price);
        formData.append("avatar", this.price);
        this.axios.post("/custom", formData).then(res => {
          if (res.data == 1) {
            alert("添加成功");
          } else {
            alert("添加失败");
          }
        });
      }
    }
  }
};
</script>

<style>
</style>