<template>
    <div class='bottom'>
       <div class='allChoose'><cart-bar-btn @click.native='selectAll' :isSelectAll='isSelectAll' class='btn'></cart-bar-btn> <span>全选</span></div>
       <div class='total'> <span>合计:${{totalPrice}}</span></div>
       <div class='pay'><span>结算({{pitchLength}})</span></div>
    </div>
</template>

<script >
import cartBarBtn from './cartBarBtn'
import {mapGetters} from 'vuex'
export default {
    components:{
        cartBarBtn
    },
    computed:{
     totalPrice(){
          return this.$store.state.cartList.filter(item=>{
             return item.pitch
         }).reduce((preValue,item)=>{
             return preValue + item.price*item.count
         },0).toFixed(2)
       },
      pitchLength(){
          return this.$store.state.cartList.filter(item=>item.pitch).length
      },
      isSelectAll(){
        if(this.$store.state.cartList.length===0){return false} else{
        return !(this.$store.state.cartList.filter(item=>!item.pitch).length)
        }
        
      }
   },
   methods:{
       selectAll(){
           if(this.isSelectAll){
               this.$store.state.cartList.forEach(item=>item.pitch=false)

           }else {
               this.$store.state.cartList.forEach(item=>item.pitch=true)
           }
       }
   }
}

</script>

<style scoped>
.bottom{
    height: 50px;
    width: 100%;
    background-color: rgb(238, 237, 237);
    position: relative;
   
    z-index: 2222;
}
.allChoose span{
  position: absolute;
  left: 40px;
  top: 13px;

}
.btn{
    position: absolute;
    top:13px;
}
.total {
    position: absolute;
    left: 110px;
    top: 13px;
}
.pay {
    width: 110px;
    height: 100%;
    background-color: rgb(252, 75, 5);
    position: absolute;
    right: 0;
    text-align: center;
    padding-top: 15px;
}
.pay span {
    font-size: 19px;
    font-weight: 600;
    color:#fff;
     
}
</style>