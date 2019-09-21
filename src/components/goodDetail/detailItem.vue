<template>
    <div> 
        <img :src="detailItem.img" alt="" @load='detailload'>
    </div>
</template>

<script >
export default {
    props:{
        detailItem:{
            type:Object,
            defalut(){
                return {}
            }
        }
    },
    methods:{
        detailload(){
             
            this.$emit('detailload')
        }
    }
}
</script>

<style scoped>

</style>