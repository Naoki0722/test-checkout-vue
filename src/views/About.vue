<template>
  <div class="home">
    <h1>Checkoutを使った実装ページ</h1>
    <button @click="$router.push('/')">topページへ戻る</button>
    <!-- 下記はポップアップパターン -->
    <!-- <vue-stripe-checkout
      ref="checkoutRef"
      :image="checkoutOptions.image"
      :name="checkoutOptions.name"
      :description="checkoutOptions.description"
      :currency="checkoutOptions.currency"
      :amount="checkoutOptions.amount"
      :allow-remember-me="false"
    ></vue-stripe-checkout>
    <button @click="checkout1">Checkout 1</button> -->


    <!-- 下記はリダイレクトパターン、こちらをうまく作りたい -->
    <!-- Create a button that your customers click to complete their purchase. Customize the styling to suit your branding. -->
    <button
      style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
      id="redirect-botton"
      role="link"
      type="button"
      @click="checkout2"
    >
      決済ページへ
    </button>

    <div id="error-message"></div>
  </div>
</template>

<script src="https://js.stripe.com/v3/"></script>
<script>
const stripe = Stripe('pk_test_51I9UrdGfr486TDLv6kvnsBtlrMuR3U041eg5HmUHUSUjrUa6dgWvM5rCTRzitv3Ox4y4jix1Cb6tqtltLW2sP4mF001nJ3V5oE');
export default {
  components: {
  },
  data() {
    return {
      // checkoutOptions: {
      //   image: "https://i.imgur.com/HhqxVCW.jpg",
      //   name: "コート",
      //   description: "上質なコートです",
      //   currency: "jpy",
      //   amount: 5000
      // },
    };
  },
  methods: {
    // checkout1() {
    //   this.$refs.checkoutRef.open();
    // },
    checkout2 () {
      this.stripe.redirectToCheckout({
        lineItems: [{price: 'price_1I9lgQGfr486TDLvBzxmvsPm', quantity: 1}],
        mode: 'payment',
        /*
        * Do not rely on the redirect to the successUrl for fulfilling
        * purchases, customers may not always reach the success_url after
        * a successful payment.
        * Instead use one of the strategies described in
        * https://stripe.com/docs/payments/checkout/fulfill-orders
        */
        successUrl: 'https://your-website.com/success',
        cancelUrl: 'https://your-website.com/canceled',
      })
      .then(function (result) {
        if (result.error) {
          /*
          * If `redirectToCheckout` fails due to a browser or network
          * error, display the localized error message to your customer.
          */
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    }
  }
};
</script>