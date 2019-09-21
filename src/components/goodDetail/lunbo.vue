
<template id='lunbo'>
    <div class='lunbo'>
       <mt-swipe :auto="4000">
   <mt-swipe-item v-for='item in imgList' :key='item.id'>
<img :src="item.img" alt="">
  </mt-swipe-item>
</mt-swipe>
    </div>
</template>

<script >
import {request} from '../../netWork/request'
export default{
name:'lunbo',
 data(){
    return {
      imgList:{}
    }
  },
 
  created(){

request ({
  url:'?page=3&count=3'
}).then(res=>{
   
   this.imgList=res.result
  
})
}
}
</script>

<style scoped>
.mui-grid-view.mui-grid-9 .mui-table-view-cell>a:not(.mui-btn){
  padding-top: 0!important;
}

.lunbo {
 height:230px;
}
img {
  width: 100%;
 height: 100%;
  
}
</style>