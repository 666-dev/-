import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Sort from "../views/Sort.vue";
import Login from "../views/Login.vue";
import Login2 from "../views/Login2.vue";
import Regist from "../views/Regist.vue";
import Shoppingcar from "../views/Shoppingcar.vue";
import My from "../views/My.vue";
import Order from "../views/Order.vue";
import Details from "../views/Details.vue";
import Buy from "../views/Buy.vue";
import Merchants from "../views/merchants/Merchants.vue";
import Setting from "../views/Setting.vue";
import sku1 from '../components/sku1'

Vue.use(VueRouter);
import store from "../store";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/sku1",
    component: sku1,
  },
  {
    path: "/setting",
    component: Setting,
  },
  {
    path: "/merchants",
    component: Merchants,
  },
  {
    path: "/buy",
    component: Buy,
  },
  {
    path: "/details/:id",
    component: Details,
  },
  {
    path: "/order",
    component: Order,
  },
  {
    path: "/sort",
    component: Sort,
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/login2",
    component: Login2,
  },
  {
    path: "/regist",
    component: Regist,
  },
  {
    path: "/my",
    name: "my",
    component: My,
  },
  {
    path: "/shoppingcar",
    name: "shoppingcar",
    component: Shoppingcar,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log("aaa");
  const nextRoute = ["my", "shoppingcar"];
  if (nextRoute.indexOf(to.name) >= 0) {
    if (
      store.state.user.isLogined == false ||
      sessionStorage.getItem("isLogined") == false
    ) {
      console.log("what fuck");
      router.push({ name: "login" });
    }
  }
  next();
});
export default router;
