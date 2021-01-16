<template>
  <div class="stripe-element">
    <h1>Stripe Element実装ページ</h1>
    <button @click="$router.push('/')">topページへ戻る</button>
    <div class="container">
      <div id="card-element">
      </div>
      <button @click="submit">Submit Payment</button>
      <div v-if="show_result">{{result_message}}</div>
    </div>
  </div>
</template>


<script src="https://js.stripe.com/v3/"></script>
<script>
export default {
  data() {
    return {
      card: null,
      stripe: "",
      show_result: false,
      result_message: ""
    };
  },
  mounted() {
    this.stripe =Stripe("pk_test_51I9UrdGfr486TDLv6kvnsBtlrMuR3U041eg5HmUHUSUjrUa6dgWvM5rCTRzitv3Ox4y4jix1Cb6tqtltLW2sP4mF001nJ3V5oE");
    const elements = this.stripe.elements();
    this.card = elements.create("card");
    this.card.mount("#card-element");
  },
  methods: {
    submit() {
      const self = this;
      self.show_result = false;
      this.stripe.createToken(this.card).then(result => {
        console.log("result:" + JSON.stringify(result));
        //エラーの場合
        if (result.error) {
          self.show_result = true;
          self.result_message = "token_id: " + result.token.id;
        } else {
          console.log(result.token.id)
        }
      });
    }
  },
}
</script>