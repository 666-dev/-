import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 存储用户信息
    user: {
      username: sessionStorage.getItem("username")
        ? sessionStorage.getItem("username")
        : "昵称",
      password: sessionStorage.getItem("password")
        ? sessionStorage.getItem("password")
        : "",
      avatar: sessionStorage.getItem("avatar")
        ? sessionStorage.getItem("avatar")
        : "",
      //标识作者是否登录
      isLogined: sessionStorage.getItem("isLogined")
        ? sessionStorage.getItem("isLogined")
        : false,
    },
  },
  mutations: {
    userLogined(state, payload) {
      state.user.password = payload.password;
      state.user.username = payload.username;
      state.user.avatar = payload.avatar;
      state.user.isLogined = true;
      //根据上述的代码可以发现，在组件文件中
      //如果要调用userLogined()方法的时候,payload参数必须
      //为对象形态
    },
  },
  actions: {},
  modules: {},
});
