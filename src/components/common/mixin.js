 
export const itemListenerMixin={
    methods:{
        debounce(func,delay){
            let timer=null
            return function(...args){
                if(timer)clearTimeout(timer)
                timer=setTimeout(() => {
                    func.apply(this,args)
                }, delay);
            }
        },
    },
    mounted(){
        console.log('refresh执行')
        const refresh=this.debounce( this.$refs.scroll.refresh,300)
        
        this.$bus.$on('itemImgLoad',()=>{
            refresh()
        })
       
    }
}