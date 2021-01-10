<template>
  <div class="cart">
  <nav-bar class="navBar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
  <cart-list class="cart-list"/>
  <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childcomps/CartList";
import {mapGetters} from "vuex"
import CartBottomBar from "./childcomps/CartBottomBar";
  export default {
    name: "Cart",
    components: {
      CartBottomBar,
      NavBar,
      CartList
    },
    computed: {
      // cartLength(){
      //   return this.$store.state.cartList.length
      // }
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
.cart {
  height: 100vh;
}
.navBar {
  background-color: var(--color-high-text);
  color: #fff;
}
</style>
