<template>
   
        <div class='button'  @click='btnClick' >
            <img   v-if="isSelectAll" src='../../assets/yes.png' alt="">
             </div>
   
</template>

<script >
export default {
     props:{
isSelectAll:{
    type:Boolean ,
    default:false
     
}
     },
     methods:{
       btnClick(){
           console.log(isPitch)
       }  
     }
   
}

</script>

<style scoped>
.button   {
     position: absolute;
     top: 36%;
     left: 3%;
     width: 22px;
     height: 22px;
      border:1px solid gray;
      border-radius: 50%;
 }
 .button img{
     width: 100%;
     height: 100%;
 }
</style>