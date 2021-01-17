<template>
  <div class="stripe-element">
    <h1>Stripe Element実装ページ</h1>
    <button @click="$router.push('/')">topページへ戻る</button>
    <div>
      <label>Card Number</label>
      <div id="card-number"></div>
      <label>Card Expiry</label>
      <div id="card-expiry"></div>
      <label>Card CVC</label>
      <div id="card-cvc"></div>
      <div id="card-error"></div>
      <button id="custom-button" @click="createToken">Generate Token</button>
    </div>
    <div class="card-test">
      <stripe-element-card
        ref="elementRef"
        :pk="pulishableKey"
        @token="tokenCreated"
        @loading="v => loading = v"
      />
      <button 
        :loading="loading" 
        :disabled="loading" 
        @click="sendToken"
      >
        押して
      </button>
    </div>
  </div>
</template>


<script>
import { StripeElementCard } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeElementCard
  },
  data () {
    this.pulishableKey = 'pk_test_51I9UrdGfr486TDLv6kvnsBtlrMuR3U041eg5HmUHUSUjrUa6dgWvM5rCTRzitv3Ox4y4jix1Cb6tqtltLW2sP4mF001nJ3V5oE';
    return {
      loading: false,
      token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    };
  },
  mounted () {
    // Style Object documentation here: https://stripe.com/docs/js/appendix/style
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.cardNumber = this.$stripeElements.create('cardNumber', { style });
    this.cardNumber.mount('#card-number');
    this.cardExpiry = this.$stripeElements.create('cardExpiry', { style });
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = this.$stripeElements.create('cardCvc', { style });
    this.cardCvc.mount('#card-cvc');
  },
  beforeDestroy () {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async createToken () {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        // handle error here
        document.getElementById('card-error').innerHTML = error.message;
        return;
      }
      window.alert(token);
      // handle the token
      // send it to your server
    },
    tokenCreated(token) {
      console.log(token);
      console.log('うまくいきました');
    },
    sendToken(){
      this.$refs.elementRef.submit();
    }
  }
};
</script>

<style scoped>
#custom-button {
  height: 30px;
  outline: 1px solid grey;
  background-color: green;
  padding: 5px;
  color: white;
}

#card-error {
  color: red;
}
</style>