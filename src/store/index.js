import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';


Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
     cartList:[]
      
    },
    mutations:{
       
      addCart(state,payload){
    
        payload.pitch=true  
        let oldProduct=null
        for(let item of state.cartList){
            if(item.id===payload.id){
              oldProduct = item
            }
        }
        if(oldProduct){
            oldProduct.count+=1
        }else {
            payload.count=1
            state.cartList.push(payload)
        }
    
      }
    },
    getters
})

export default store