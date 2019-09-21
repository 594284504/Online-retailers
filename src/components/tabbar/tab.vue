<template>
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to='/home' href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to='/class' href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-bars"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab-item" to='/car' href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class='mui-badge'>{{cartLength}}</span></span>
				
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to='/my' href="#tabbar-with-map">
				<span class="mui-icon mui-icon-person"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav> 
</template>

<script>
import {mapGetters} from 'vuex'

export default {
	computed:{
      ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.mui-bar-tab .mui-tab-item .mui-active {
  color:rgba(255, 94, 0, 0.931);
}
.mui-bar{
 position: fixed!important;
 bottom: 0;
 left: 0;
 height: 50px;
 
}
</style>