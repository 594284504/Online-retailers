<template>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="abclist[0].img"  alt="">
		                    <div class="mui-media-body">天猫</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                              <img :src="abclist[1].img"  alt="">		      
               <div class="mui-media-body">天猫国际</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="abclist[2].img"  alt="">
		                    <div class="mui-media-body">外卖</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="abclist[3].img"  alt="">
		                    <div class="mui-media-body">天猫超市</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="abclist[4].img"  alt="">
		                    <div class="mui-media-body">充值中心</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="abclist[5].img"  alt="">
		                    <div class="mui-media-body">领金币</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img :src="abclist[6].img"  alt="">
		                    <div class="mui-media-body">拍卖</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="abclist[7].img"  alt="">
		                    <div class="mui-media-body">飞猪</div></a></li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img :src="abclist[8].img"  alt="">
		                    <div class="mui-media-body">拍卖</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="abclist[9].img"  alt="">
		                    <div class="mui-media-body">飞猪</div></a></li>
		     
		        </ul>
    </div>
</template>

<script >
import {request} from '../../netWork/request'
export default {
	name:'abc',
	data(){{
		return {
			abclist:null
		}
	}},
	created(){
		request({
			url:'?page=5&count=10'})
			.then(res=>{
			 this.abclist=res.result
			 
			}
		)
	}
}
</script>

<style scoped>

 img {
	width: 100%;
	height: 55px;
	border-radius: 100%
}
.mui-media-body {
	font-weight: 200;
	font-size: 12px;
	 color:rgb(105, 103, 103)!important;
} 
.mui-table-view-cell,.mui-media,.mui-col-xs-4,.mui-col-sm-3{
	padding:5px 10px!important;
	border:0!important;
}
.mui-media-body{
	margin-top: 0!important;
	    font-size: 12px!important;
    line-height: 12px!important;
}
.mui-content>.mui-table-view:first-child {
	  margin-top: 0!important;
}
.mui-col-sm-3 {
	width:20%!important;
}
 
</style>