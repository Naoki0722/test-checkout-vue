import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { StripeElementsPlugin } from '@vue-stripe/vue-stripe';
const options = {
  pk: 'pk_test_51I9UrdGfr486TDLv6kvnsBtlrMuR3U041eg5HmUHUSUjrUa6dgWvM5rCTRzitv3Ox4y4jix1Cb6tqtltLW2sP4mF001nJ3V5oE',
  // Connectでのみ使用します。接続されたアカウントID（たとえばacct_24BFMpJ1svR5A89k）を指定すると、そのアカウントに代わってアクションを実行できます。
  // stripeAccount: 'acct_1IAc2e2faNeryMBD',
  apiVersion: '2020-08-27',
  locale: 'ja',
  // See https://stripe.com/docs/js/elements_object/create#stripe_elements-options
  elementsOptions: {
    fonts: [],
    locale: 'auto',
  },
};
Vue.use(StripeElementsPlugin, options);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
