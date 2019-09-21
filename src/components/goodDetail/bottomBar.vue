<template>
    <div class='btmBar'>
     <div class='bar1'><i class="mui-icon-extra mui-icon-extra-custom"></i><p class='font1'>客服</p></div>
     <div class='bar1'><i class="mui-icon mui-icon-home"></i><p class='font1'>店铺</p></div>
     <div class='bar1'><i class="mui-icon-extra mui-icon-extra-heart"></i><p class='font1'>收藏</p></div>
     <div  @click='addToCart' class='bar2'><i class="mui-icon-extra mui-icon-extra-cart cart"></i><p class='font2'>加入购物车</p></div>
     <div class='bar3'><i></i><p class='font3'>立即购买</p></div>
    </div>
</template>

<script >
import { Toast } from 'mint-ui';
export default{
 methods:{
     addToCart(){
         console.log('1111')
         this.$emit('addToCart')
               let hint=Toast({
  message: '已加入购物车',
  position: 'center',
  duration: 1000
})
     }
 }
}

</script>

<style scoped>
.btmBar{
    width: 100%;
    height: 60px;
  background-color: #fff;
    position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: 11;
   float: left;
   box-shadow: 0 0 2px black;
}
.btmBar .bar1 {
    width: 14%;
    height: 100%;
    padding-top:2px;
   
    float: left;
}
 .mui-icon-extra ,.mui-icon-extra-custom{
     display: inline-block;
     font-size: 30px;
     margin-left:14px;
     color:rgb(47, 47, 47);
     margin-top: 3px;
 }
 .mui-icon ,.mui-icon-home {
display: inline-block;
     font-size: 30px;
     
     color:rgb(47, 47, 47);
     margin: 2px 0 2px 15px;

 }
 .cart {
     margin:-1px 0 0 40px;
     color:#fff;
 }
 .font1 {
    font-size: 15px; 
    margin-top: 2px;
        text-align: center;
        color: rgb(39, 38, 38);
 }
 .font2{
     text-align: center;
     font-size: 18px;
     color:#fff;
     font-weight: 500;
 }
.font3{
    text-align: center;
    line-height: 60px;
    font-size: 19px;
    color:#fff;
    font-weight: 600;
}
.btmBar .bar2 {
    width: 30%;
    height: 100%;
    padding-top:2px;
    background-color: rgb(251, 166, 7);
    float: left;
}
.btmBar .bar3 {
    width: 28%;
    height: 100%;
    padding-top:2px;
    background-color: rgb(255, 95, 2);
    float: left;
}






















</style>