import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Foot from "./components/Foot";

Vue.config.productionTip = false;
axios.defaults.baseURL = "http://127.0.0.1:3000";
Vue.prototype.axios = axios;
// 定义全局组件
Vue.component("Foot", Foot);

import qs from "qs";
Vue.prototype.qs = qs;

//引入vant
import Vant from "vant";
//导入vant样式表
import "vant/lib/index.css";
//vue.use()方法使用vant
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
