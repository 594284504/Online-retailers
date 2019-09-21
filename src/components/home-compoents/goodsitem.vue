<template>
    <div class='gooditem' @click='goodClick'>
      <img :src="gooditem.img" alt="" @load='imgload'>
      <div>
          <p>夏季潮流宽松潮牌修身</p>
          <span class='span1' >￥{{gooditem.id}}</span>
          <span class='span2'>{{gooditem.id}}人付款</span>
          <span class='span3'>...</span>
      </div>

    </div>
</template>

<script >
export default{
    props:{
        gooditem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
  data(){
      return {
          id:null
      }
  },
    methods:{
        goodClick(){
          this.$router.push('/detail'+'/'+this.gooditem.id)
           this.$nextTick(()=>{
             this.$bus.$emit('img',this.gooditem.img)
        })
        
        },
        imgload(){
            this.$bus.$emit('itemImgLoad')
           
        }
       
    }
}

</script>

<style scoped>
.gooditem {
  padding-bottom: px;
  position: relative;
  width: 48%;
  float: left;
background-color: white;
  border-radius: 5px;
  margin-bottom: 7px;
  margin-top: 5px;
}
.gooditem img {
    width: 100%;
    height: 80%;
    border-radius: 5px;
}
.gooditem p{
 margin-left: 6%;
color:rgb(42, 42, 42);
 
}
.gooditem .span1{
    font-size: 15px;
    margin-left:6%; 
    color: red;
    
}
.span2 {
    font-size: 12px;
    margin-left: 5px;
    color:gray;
}
.span3 {
    margin-left: 25%;
    color: rgb(139, 136, 136);
    font-weight: 600;
}
</style>