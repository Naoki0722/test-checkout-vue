import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueStripeCheckout from "vue-stripe-checkout";
// Vue.use(
//   VueStripeCheckout,
//   "pk_test_51I9UrdGfr486TDLv6kvnsBtlrMuR3U041eg5HmUHUSUjrUa6dgWvM5rCTRzitv3Ox4y4jix1Cb6tqtltLW2sP4mF001nJ3V5oE"
// );

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
