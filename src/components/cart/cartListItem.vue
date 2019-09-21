<template>
    <div class='listItem'>
        <btn-pitch :isPitch='item.pitch' @click.native='btnClick'></btn-pitch>
       <img class='goodImg' :src="item.img" alt="">
       <span class='title'>{{item.name}}</span>
       <span class='price'>$:{{item.price}}</span>
       <span class='count'>x{{item.count}}</span>
    </div>
</template>

<script >
 import btnPitch from './cartButton'
export default{
  components:{
   btnPitch
  },
   data(){
       isTrue: item.pitch
   },
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        btnClick(){
            this.item.pitch=!this.item.pitch
            console.log(this.item.pitch)
           
        }
    }
}

</script>

<style scoped>
.listItem{
    width: 100%;
    height: 100px;
    background-color: #fff;
    padding: 6px 8px 6px 50px ;
    border-bottom:1px solid rgb(173, 172, 172);
    position: relative;
    
     
}
 
.goodImg{
    width: 20%;
    height: 100%;
    float: left;
    border-radius: 10%;
    margin-right: 20px;
}
 .title{
     font-size: 17px;  
 
 }
 .price {
    position: absolute;
    bottom: 6px;
    left:35%;
 color: rgb(252, 94, 2);
      
 }
 .count {
     position: absolute;
     bottom:6px;
     right:20px;
 }
 
</style>