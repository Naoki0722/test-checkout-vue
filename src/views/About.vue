<template>
  <div class="home">
    <h1>Checkoutを使った実装ページ</h1>
    <button @click="$router.push('/')">topページへ戻る</button>
    <div class="stripe-area">
      <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
      />
      <button @click="submit">1回限りの購入ページへ</button>
      <stripe-checkout
        ref="checkoutRefSubsc"
        mode="subscription"
        :pk="publishableKey"
        :line-items="lineItems2"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
      />
      <button @click="submit2">サブスクリプション</button>
    </div>

    <div id="error-message"></div>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout
  },
  data() {
    this.publishableKey = 'pk_test_51I9UrdGfr486TDLv6kvnsBtlrMuR3U041eg5HmUHUSUjrUa6dgWvM5rCTRzitv3Ox4y4jix1Cb6tqtltLW2sP4mF001nJ3V5oE';
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1IAX4wGfr486TDLv2VtvWrCK',
          quantity: 1,
        },
      ],
      lineItems2: [
        {
          price: 'price_1IAbAuGfr486TDLvCZ1qwXo9',
          quantity: 1,
        },
      ],
      successURL: "https://vuestripe.com/stripe-checkout/one-time-payment/",
      cancelURL: "https://vuestripe.com/stripe-checkout/one-time-payment/",

    };
  },
  methods: {
    submit() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    submit2() {
      this.$refs.checkoutRefSubsc.redirectToCheckout();
    }
  }
};
</script>


<style scoped>
.stripe-area {
  display: flex;
  justify-content: center;
  margin: 100px 0;
}
</style>