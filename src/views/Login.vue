<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      right-text="注册"
      @click-right="regist"
      @click-left="back"
    ></van-nav-bar>
    <van-cell-group>
      <van-field v-model="username" label="用户名" placeholder="请输入用户名"></van-field>
      <van-field @keyup.13="submit" v-model="password" label="密码" placeholder="请输入密码"></van-field>
    </van-cell-group>
    <router-link to class="router">忘记密码?</router-link>
    <div>
      <van-button type="primary" round size="large" @click="login">立即登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      fileList: []
    };
  },
  methods: {
    submit(e) {
      console.log(e);
      this.login();
    },
    //   跳转注册页面
    regist() {
      this.$router.push("/regist");
    },
    // 返回
    back() {
      this.$router.push("/");
    },
    login() {
      var obj = {
        username: this.username,
        password: this.password
      };
      //QS的stringify()方法用于将数组/对象转换成请求字符串
      this.axios.post("/login", this.qs.stringify(obj)).then(res => {
        console.log(res.data);
        if (res.data.code == 1) {
          this.$toast("登录成功");
          console.log(res.data.result.username);
          //登录成功,将相关信息存储到sessionStorage中
          sessionStorage.setItem("id", res.data.result.id);
          sessionStorage.setItem("username", res.data.result.username);
          sessionStorage.setItem("password", res.data.result.password);
          sessionStorage.setItem("avatar", res.data.result.avatar);
          sessionStorage.setItem("isLogined", true);
          //将数据存储到Vuex中
          this.$store.commit("userLogined", res.data.result);
          this.$router.push("/my");
        } else {
          this.$toast("用户名或密码错误");
        }
      });
    }
  }
};
</script>

<style scoped>
/* button样式 */
.van-button--round {
  margin-top: 10px;
}
.van-cell {
  padding: 20px 16px;
}
.router {
  display: block;
  text-align: right;
  margin: 15px;
  font-size: 14px;
  color: red;
}
</style>