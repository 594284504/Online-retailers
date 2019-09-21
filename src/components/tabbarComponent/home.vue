<template>
    <div id='home' class='home'>

   <!-- 首页导航栏组件 -->
    <navbar></navbar> 
   <claShow ref='clashow1' v-show='isShow1' :title="['猜你喜欢','附近热卖' ]" @tabclick='tabClick' class='clashow1'></claShow>

//scroll 区域
   <scroll class='scroll'   ref='scroll' 
           :probe-type='0'  :pull-up-load='true'
           @scroll='currentScroll' 
            @pullingUp='loadMore'>

<!-- 首页轮播图组件 -->
    <lunbo></lunbo>
<!-- 首页分类入口组件 -->
<classify></classify>
<!-- 滚动文章组件 -->
 <img1></img1>
<!-- 分类展示组件 -->
<claShow  class='clashow' ref='clashow' :title="['猜你喜欢','附近热卖' ]" @tabclick='tabClick' ></claShow>
<!-- 商品组件 -->
<goodList :gogo='showgogo'></goodList>

</scroll>

<!-- 放回页面顶部组件 -->
<backTop class='clashow' @click.native='backClick' v-show="isShow"></backTop>

</div>
</template>

<script >
import navbar from '../home-compoents/nav';
import img1 from '../tabbar/img';
import classify from '../home-compoents/classify'
import lunbo from '../home-compoents/lunbo';
import claShow from '../home-compoents/classify-show'
import { Indicator } from 'mint-ui';
import {getHomeGoods} from '../../netWork/goods'
import goodList from '../home-compoents/goods';
import scroll from '../common/scroll/btscroll';
import backTop from '../common/backTop/backTop'
import {itemListenerMixin} from '../common/mixin';

export default{
   
components:{
 classify,
 img1,
 lunbo,
 navbar,
 claShow,
 goodList,
 scroll,
 backTop,
 
},
//混入对象引入
 mixins:[itemListenerMixin],

 data(){
    return {
        //商品数据
        goods:{
            'like':{page:0,list:[]},
            'hotSell':{page:3,list:[]}
        },
        //当前页面默认显示商品
        currentType:'like',
        //返回顶部图标是否显示
        isShow:false,
        //保存滚动y轴数据
        saveY:0,
        
        isShow1:false
    }
},
computed:{
    //将当前商品类型的数据数组发送至goodList组件中
    showgogo(){
   return   this.goods[this.currentType].list
    }
},
created(){
    //渲染页面前执行网络请求，将取得的数据加入到相应类型的List数组中
    this.getHomeGoods('like')
    this.getHomeGoods('hotSell')
  
},
 
activated(){
    // 在重新进入HOME组件时，执行better-scroll中的方法
     this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    //返回某位置时，立即对当前组件进行刷新，防止没有实时获取到content正确高度而导致的页面卡顿
    this.$refs.scroll.refresh()
      
},
deactivated(){
   //离开当前组件时记录当前所处的位置数据，供重新回到组件的时候使用
    this.saveY=this.$refs.scroll.getScrollY()
    
},
methods:{
  //商品分类的点击事件，根据Index对currentTyoe赋值
    tabClick(index){
    switch(index){
        case 0:this.currentType='like';
        break;
        case 1:this.currentType='hotSell';
        break;
    }
    //保证两个相同组件，在吸顶时保证相同显示
 this.$refs.clashow.currentIndex=index
 this.$refs.clashow1.currentIndex=index
    },
// 返回顶部的点击事件
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },

// Bscroll组件的实时监听方法,监听实时位置变化，赋值isShow的布尔值  
     currentScroll(position){
      this.isShow=(-position.y)>1000 
     this.isShow1=(-position.y)>this.$refs.clashow.$el.offsetTop
     },

//Bscroll组件下拉加载方法，执行一次网络请求，并返回数据并渲染加载到页面时，立即对组件刷新
     loadMore(){
         Indicator.open();
  console.log(this.goods.like.list)
      this.getHomeGoods(this.currentType)
        this.$refs.scroll.refresh()
     setTimeout(() => {
          Indicator.close()
     }, 600);
   },
//请求商品数据方法
    getHomeGoods(type){
         const page=this.goods[type].page+1
        getHomeGoods(page).then(res=>{   
       this.goods[type].list.push(...res.result)  
        this.goods[type].page+=1
        //立即结束Bscroll下拉函数，以便下次继续执行下拉动作
       this.$refs.scroll.finishPullUp()  
    })
    }

}

}
</script>

<style  scoped>

.home {
background-color:rgba(228, 227, 227, 0.623);
height: 100vh;
}

.scroll{
width: 100%;
 margin-top: 20px;
top: 0;
left: 0;
height: calc(100% - 90px);
overflow: hidden;
 
}
.clashow1 {
    margin-top: 40px;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 z-index: 1;


}

</style>