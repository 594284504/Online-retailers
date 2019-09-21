<template>
    <div class='cart'>
       <tab-slot class='nav'>
           <div slot='center'>我的购物车({{cartLength}})</div>
       </tab-slot>
       <cart-list></cart-list>

         <cart-bottom></cart-bottom>
    </div>
</template>

<script >
import tabSlot from '../common/tabSlot/tabSlot'
import {mapGetters} from 'vuex'
import cartList from '../cart/cartList'
import cartBottom from '../cart/cartBottomBar'
export default {
  components:{
      tabSlot,
      cartList,
      cartBottom
  },
  computed:{
      ...mapGetters(['cartLength'])
  }
}

</script>

<style scoped>
.nav {
    background-color: rgb(246, 79, 12);
    color:#fff; 
}
.cart{
  height: 100vh;
}
</style>