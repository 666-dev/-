<template>
  <div class="bj">
    <div>
      <van-nav-bar title="欢迎登录" @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" size="32"></van-icon>
        </template>
      </van-nav-bar>
      <div class="whole">
        <van-tabs
          color="#C8963D"
          duration="0.5"
          title-active-color="#C8963D"
          title-inactive-color="#C8963D"
          line-width="120px"
          v-model="active"
        >
          <van-tab title="手机登录">
            <van-field required v-model="phoneNumber" label="手机号" placeholder="请输入手机号" />
            <van-field
              required
              v-model="password"
              type="password"
              label="验证码"
              placeholder="请输入验证码"
            />
            <div class="code">获取验证码</div>
            <div style="margin: 16px;">
              <van-button round block type="info">立即登录</van-button>
            </div>
            <!-- <div class="line">
            <router-link to="/regist">立即注册</router-link>
            </div>-->
          </van-tab>
          <!-- 第二个面板 -->
          <van-tab title="密码登录">
            <van-field required v-model="username" label="用户名" placeholder="请输入用户名" />
            <van-field required v-model="password" type="password" label="密码" placeholder="请输入密码" />
            <div style="margin: 16px;">
              <van-button round block type="info" @click="login">立即登录</van-button>
            </div>
            <div class="line2">
              <div class="line">
                <router-link to="/regist">立即注册</router-link>
              </div>
              <div class="line">
                <router-link to>忘记密码？</router-link>
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <div class="wechat">
          <img src="../assets/icon/we-chat.png" alt />
          <p class="p">微信一键登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      phoneNumber: "",
      username: "",
      password: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    login() {
      var obj = {
        username: this.username,
        password: this.password
      };
      //QS的stringify()方法用于将数组/对象转换成请求字符串
      this.axios.post("/login", this.qs.stringify(obj)).then(res => {
        if (res.data != null) {
          var ifo = res.data;
          var username = ifo[0].username;
          var password = ifo[0].password;
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("password", password);
          this.$toast("登录成功");
          this.$store.commit("userInfo", username);
          this.$store.commit("portrait", password);
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
/* .bj{
  width:100%;
  height: 100%;
  background: linear-gradient(to top, #ffe2b4, #ffa10d);
  position: fixed;
} */
/* 整体 */
.whole {
  position: relative;
  top: 150px;
}
.van-hairline--bottom::after {
  border-bottom-width: 0;
}
[class*="van-hairline"]::after {
  border: 0;
}
/* 验证码 */
.code {
  position: absolute;
  top: 140px;
  right: 20px;
  color: #cb893d;
  font-size: 14px;
}
/* 链接下划线 */
.line {
  margin: 0 24px;
  /* display: inline; */
  /* border-bottom: 1px solid #C8963D;; */
}
.line2 {
  display: flex;
  justify-content: space-between;
}
/* 表单 */
.van-cell {
  margin-top: 20px;
}
/* wechat */
.wechat {
  position: absolute;
  top: 21em;
  left: 9.8em;
}
.wechat img {
  width: 3em;
  height: 3em;
}
.wechat p {
  font-size: 14px;
  margin-left: -1em;
}
.van-nav-bar {
  background-color: transparent;
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
  background-color: #ffa338;
  border: 1px solid #ffac4d;
}
a {
  color: #c8963d;
  font-size: 14px;
}
.van-icon-arrow-left::before {
  color: darkgray;
}
</style>