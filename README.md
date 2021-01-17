# test-checkout-vueプロジェクト


## 質問内容

### 2021.01.16 checkout実装がうまくいかない
#### About.vue(checkoutの実装)
Stripeを使った実装を勉強中なのですが、 Checkoutを使った実装ができておりません。

ライブラリのインストール等でvue-stripe-checkoutを使って実装を考えていました。
npmの公式ページの通りにやろうと思っているのですが、できないです。
https://www.npmjs.com/package/vue-stripe-checkout
また、checkoutはポップアップを出す方法とリダイレクトしてstripeのページに飛ばす２パターンがあるかと思います。


今回はどちらもできるようになりたいと思っているのですが、できずに苦戦しております。

vue用のライブラリが微妙なので、Stripe.jsというJavaScriptのライブラリを使おうと思っています。
Stripe.jsを使う場合、public/index.htmlに記載すればいいと思っているのですが、About.vueでStripeのインスタンス作成をするとエラーを起こします。そのため、About.vueにも下記コードを入れないといけないです。
```
<script src="https://js.stripe.com/v3/"></script>
```

コンソールでもエラーを起こしております。

```
You may test your Stripe.js integration over HTTP. However, live Stripe.js integrations must use HTTPS.
```
httpsにしないといけないのですが、下記ではサーバーアクセスできませんでした。
```
yarn serve --https
```

#### StripeEle.vue(自作フォームでの決済方法)
elementを生成する方法は、tokenがresponseとして返ってきているので、あっているのかなと思います。
もしバックエンドと繋げるならaxios.postでトークンを送ればいけるのかなと思っております。
テストカードの番号は下記です。
```
4242 4242 4242 4242
```


### 2021.01.18 Vue Stripeというプラグインを利用

質問したところ、プラグインがあるということで、そちらを利用して実装。
CheckoutならびにElementsを使う方法について実装できた。

次回はバックエンドも開発し、トークンをバックエンドに遅れるようにする。





## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
