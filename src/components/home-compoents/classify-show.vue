<template>
    <div class='claShow'>
        <div v-for="(item,index) in title" :key='item.index' class='claShow-item' :class='{active:index === currentIndex}' @click='clicked(index)'>
           <span>{{item}}</span>
           </div>
 

    </div>
</template>

<script >
export default {
    data(){
        return {
            currentIndex:0,
          
        }
    },methods:{
        clicked(index){
            this.currentIndex=index;
            this.$emit('tabclick',index)
        }
        
    },
        props: {
            title:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }


</script>

<style scoped>
.claShow{
    display: flex;
    text-align: center;
    font-size: 14px;
    background-color: white;
     position: sticky;
     top: 0 ;
     margin-top: 8px;
     z-index: 999;
}
.claShow-item {
    flex:1;
    height: 40px;
    line-height: 40px;
}
.claShow-item span {
    padding-bottom: 5px;
}
.active{
    color: orangered;
}
.active span {
    border-bottom: 3px solid orangered;
}
</style>