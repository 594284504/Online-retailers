<template>

    <div class='wrapper' ref='wrap'>
      <div class='content'>
         <slot></slot>
      </div>
    </div>
   
</template>

<script >
import BScroll from 'better-scroll'
export default{
    data(){
        return {
            scroll:null,
            msg:1
        }
    },
    props:{
       probeType:{
                type:Number,
                default:0
            },
       pullUpLoad:{
           type:Boolean,
           default:false
       }     

    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrap,{
         probeType:this.probeType,
           pullUpLoad:this.pullUpLoad,
           click:true
        }),
        this.scroll.on('scroll',position=>{
            this.$emit('scroll',position)
            //console.log(position)
        }) 
     this.scroll.on('pullingUp',()=>{
         this.$emit('pullingUp')
     })
     
      
    
},
methods:{
 
    finishPullUp(){
        this.scroll.finishPullUp()
    },
    refresh(){
          console.log('scroll插件refresh执行')
        this.scroll &&  this.scroll.refresh() &&  this.scroll.refresh 
       
    },
    getScrollY(){
        return this.scroll.y?this.scroll.y:0
    }

}
}
</script>

<style scoped>
.wrapper{
 overflow: hidden;

}

</style>