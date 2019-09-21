<template>
  <div id='app' class="ap">
 
 <!-- 默认页面样式 -->

    <!-- router-view主界面路由视图区-->
	<keep-alive>
<router-view></router-view>
</keep-alive>


    <!-- tabbar底部菜单栏-->
 <tab></tab>
   
  </div>

</template>

<script>
 import tab from '../components/tabbar/tab'

//将模板组件发送至main.js，通过render渲染函数，挂载至html中的项目标签内

 export default {
	 name:'app',
	 components:{
		 tab
	 } 
	 

 }
</script>

<style >
 



.ap{
	background-color:#fff;
}
</style>
