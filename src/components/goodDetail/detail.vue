<template>
	<div class='body'>
	   <tabSlot class='nav'>
	       <div slot ="left" class='back' @click='backclick'>
	     <img class='backimg' src = "../../assets/back.jpg" alt = "">
			</div>
			<div slot='center'  >
			<claShow class='claShow-item' :title = "['商品','详情','推荐' ]" @tabclick = 'tabClick' ref='nav'></claShow>
			</div>
		</tabSlot>

		<scroll class='content' @scroll = 'currentScroll' :probe-type = '3' ref = 'scroll' :pull-up-load = 'true'>

			<lunbo class='lunbo'></lunbo>

			<div  class='goodTitle'>
			<span class='icon'> ￥: </span> <span class = 'price'> {{goodDetail.id}}</span>
				<h4 class = 'title'>2019春秋新款气质百搭韩版女神网红套装时尚两件套 </h4>
				 <span class = 'express'> 快递:0.0 </span> <span class='time'>月销:{{goodDetail.id}}</span>
				  <img src = "../../assets/detail.png" alt = ""></div>

			<div  class = 'detailFont'><span ref   = 'goodDetail'>-商品详情-</span> </div>

			<detailItem v-for = 'item in imglist' :key = 'item' :detailItem = 'item' @detailload = 'detailload'></detailItem>

			<div   class = 'rec'><span  ref   = 'rec'>--为你推荐--</span> </div>

			<goods :gogo = 'showrec' ref='good'></goods>
			
		</scroll>

		<bottombar @addToCart='addToCart'></bottombar>

		<backTop class = 'backtop' @click.native = 'backTop' v-show = 'isShow'>

		</backTop>
	</div>
</template>
<script>
	import claShow from '../home-compoents/classify-show'
	import tabSlot from '../common/tabSlot/tabSlot';
	import lunbo from './lunbo'
	import {request} from '../../netWork/request'
	import detailItem from './detailItem'
	import scroll from '../common/scroll/btscroll'
	import backTop from '../common/backTop/backTop'
	import goods from '../home-compoents/goods'
	import {getHomeGoods} from '../../netWork/goods'
	import {itemListenerMixin} from '../common/mixin';
    import bottombar from './bottomBar'
    
	export default {
		data() {
			return {

				id        : null,
				goodDetail: null,
				imglist   : null,
				isShow    : false,
				goods     : {
					'rec': {page: 5,list: []}
				},
				classifyTopY: null,
				fresh:null,
				currentIndex:0,
				cartList:null,
				img:null
		          
			}
		},
		computed:{
    showrec(){
   return   this.goods['rec'].list
    }
},
		mixins: [itemListenerMixin],

		components: {
			claShow,
			tabSlot,
			lunbo,
			detailItem,
			scroll,
			backTop,
			goods,
			bottombar
		},
		created() {
		 this.$bus.$on('img',res=>{
			this.img=res
		  console.log(res)
		  console.log(this.img)
		})
			this.id = this.$route.params.id,
				request({url: '?page=3&count=1'})
				.then(res => {this.goodDetail=res.result[0]}),
				request({url: '?page=7&count=6'})
				.then(res => {
					this.imglist = res.result
						console.log(this.isShow)
					}

				),
				this.getHomeGoods('rec')
				this.fresh =this.debounce(() => {
						this.classifyTopY = []
						this.classifyTopY.push(0)
						this.classifyTopY.push(this.$refs.goodDetail.offsetTop)
						this.classifyTopY.push(this.$refs.rec.offsetTop)
						console.log(this.classifyTopY)
					},900)
					
		 
		},
		methods: {
			debounce(func,delay) {
				let timer = null
				return function(...args) {
					if(timer)clearTimeout(timer)
					timer = setTimeout(() => {
								func.apply(this,args)
							},delay);
				}
			},
			
			addToCart(){
		
		         
				 const product={}
				  product.img=this.img
				  product.name='2019夏日贴身夏季潮流宽松潮牌修身'
				  product.id=this.$route.params.id
				 product.price=this.$route.params.id
				  this.$store.commit('addCart',product)
				  console.log(this.img)
				   
			},
			detailload(){
				  this.$refs.scroll.refresh()
			 this.fresh() 
		
				},

		 
			
            
			backclick() {
				this.$router.go(-1)
				this.$refs.scroll.scroll.scrollTo(0,0,200)
			},
			currentScroll(position) {
				this.isShow = (-position.y) >1000
             const positionY=-position.y
			 let length=this.classifyTopY.length
			 for(let i=0;i<length;i++){
				 if(this.currentIndex !== i&&(( i<length-1 && positionY>this.classifyTopY[i] &&
					 positionY<this.classifyTopY[i+1]) || (i===length-1 && positionY>=this.classifyTopY[i]))){
						this.currentIndex=i
				
						this.$refs.nav.currentIndex=this.currentIndex
						 }
			 }
 

      
	


				},
			backTop() {
				this.$refs.scroll.scroll.scrollTo(0,0,200)
			},
			tabClick(index) {

				switch (index) {
					case 0: this.$refs.scroll.scroll.scrollTo(0,0,200);
						break;
					case 1: this.$refs.scroll.scroll.scrollTo(0,-this.classifyTopY[1],200);
						break;
					case 2: this.$refs.scroll.scroll.scrollTo(0,-this.classifyTopY[2],200);
						break;
				}

			}

			,
			getHomeGoods(type) {
			 const page = this.goods[type].page
				getHomeGoods(page).then(res => {
						this.goods[type].list.push(...res.result)
					}

				)
			}

			,
			

		 
		}
	}

	</script> 
	<style scoped >
		.claShow-item {
			margin-top: 0;
		}


		.back {
			width      : 13px;
			height     : 20px;
			margin-top : 7px;
			margin-left: 20px;
		}

		.back .backimg {
			width : 100% ;
			height: 100% ;
		}

		.title {
			font-weight     : 600;
			font-size       : 18px;
			background-color: white;
			margin-top      : 9px;
			margin-left     : 3% ;
			margin-bottom   : 4% ;
		}

		.body {
           height: 100vh;
		}

		.nav {
			position: relative;
			z-index : 2;
		}

		.content {
			height: calc(100% - 94px);
		}

		.price {

			margin-top : 10px;
			font-weight: 600;
			font-size  : 26px;
			color      : red;
		}

		.time {
			margin-left: 45% ;

			color:rgb(122,
					118,
					118)
		}

		.icon {
			color      : red;
			margin-left: 3% ;
		}

		.goodTitle {
			margin-top: 10px;


		}

		.express {
			margin-left: 3% ;
			color      : rgb(122,118,118);

		}

		.goodTitle img {
		width     : 100% ;
		height    : 100% ;
		margin-top: 5% ;
	}

	.detailFont {
		width : 100% ;
		height: 30px;
	}

	.detailFont span {
		margin-left: 40% ;
		color      : rgb(199,100,7)
	}

	.backtop {
		z-index : 999;
		position: absolute;

	}

	.rec {
		width : 100% ;
		height: 40px;
	}

	.rec span {
		line-height: 40px;
		margin-left: 40% ;
		color      : rgb(199,100,7)
	}

	</style>
