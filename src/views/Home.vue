<template>
  <div class="home">
    <h1>Stripe Test</h1>
    <button @click="$router.push('/about')">Checkout実装ページへ</button>
    <button @click="$router.push('/stripe')">Elementを使った実装ページへ</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
