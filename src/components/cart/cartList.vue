<template>
    <div class='cartlist'>
        <scroll class='content' ref='scroll'>
    
 <list-item v-for="item in cartList" :key='item' :item='item'> </list-item>
    
       </scroll> 
    </div>
</template>

<script >
import scroll from '../common/scroll/btscroll'
import listItem from './cartListItem'
import {mapGetters} from 'vuex'
export default {
    components:{
    scroll,
    listItem
    },
   computed:{
   ...mapGetters(['cartList'])
   },
   activated(){
       this.$refs.scroll.refresh()
        
   }
}

</script>

<style scoped>
.cartlist{
    height: calc(100% - 144px);
}
.content{
    height: 100%;
    overflow: hidden;
}
</style>