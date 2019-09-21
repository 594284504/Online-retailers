<template>
  <div class='goods'>
    <goodsitem ref='goodId' v-for='item in gogo' :key='item' :gooditem="item" @load='goodload'>

    </goodsitem>
      
    </div>
</template>

<script >

import goodsitem from './goodsitem'
export default {
    components:{
        goodsitem
    },
    methods:{
      goodload(){
          this.$bus.$emit('goodload')
     
    }
    },
    

     props:{
         gogo:{
             type:Array,
             default(){
                 return []
             }
         }
         
     },
    
     
}

</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>