<template>
  <div class="bj">
    <van-nav-bar title="欢迎注册" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="32"></van-icon>
      </template>
    </van-nav-bar>
    <van-uploader :after-read="onRead" :max-count="1" v-model="fileList" class="update">
      <van-image width="80" height="80" round />
    </van-uploader>
    <div class="whole">
      <van-field required v-model="username" label="账号" placeholder="请输入账号" />
      <van-field required v-model="password" type="password" label="密码" placeholder="请输入密码" />
      <div style="margin: 16px;">
        <van-button round block type="info" @click="regist">立即注册</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      fileList: [],
      avatar: ""
    };
  },
  methods: {
    onRead() {
      var content = this.fileList[0];
      var avatar = content.content;
      // console.log(avatar);
      this.avatar = avatar;
      console.log(this.fileList[0].file);
    },
    o() {
      console.log(this.fileList);
    },
    // 返回
    onClickLeft() {
      this.$router.push("/login");
    },
    checkUsername() {},
    regist() {
      var formData = new FormData();
      formData.append("content", this.fileList[0].file);
      formData.append("content", this.username);
      formData.append("content", this.password);
      //QS的stringify()方法用于将数组/对象转换成请求字符串
      this.axios.post("/register", formData).then(res => {
        console.log(res.data);
        if (res.data == 1) {
          this.$toast("注册成功");
          this.$router.push("/login");
        }
      });
    }
  }
};
</script>

<style scoped>
/* 图片预览 */
.van-uploader__preview-image {
  border-radius: 50%;
}
/* 上传上下边距 */
.update {
  display: flex;
  justify-content: center;
  margin: 50px 0 50px 0px;
}
.whole {
  position: relative;
}
/* 表单 */
.van-cell {
  margin-top: 20px;
}
.van-hairline--bottom::after {
  border-bottom: 0px;
}
.van-cell {
  color: #cb893d;
}
.van-field__control {
  color: #cb893d;
}
.van-tab {
  color: #cb893d;
}
.van-button--info {
  background-image: linear-gradient(90deg, #f90, #ff5000);
  border: 1px solid #ffac4d;
}
.van-icon-arrow-left::before {
  color: darkgray;
}
.van-nav-bar {
  background-color: transparent;
}
</style>