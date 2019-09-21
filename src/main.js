import Vue from 'vue'
//引入基于Vue的Mint-ui框架库
import './assets/style.css'

//引入Vue路由文件
import VueRouter from 'vue-router';
Vue.use(VueRouter)

//引入Mui插件
import '../mui-master/dist/css/mui.min.css';
import '../mui-master/examples/hello-mui/css/icons-extra.css'

import { Header,Swipe, SwipeItem,Button,InfiniteScroll } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(InfiniteScroll);

//引入路由、Vuex组件
import router from './netWork/router'
import store from './store/index'

//引入模板组件
import App from './assets/App.vue'

//注册事件总线的vue实例
Vue.prototype.$bus=new Vue()

//HTML中id=app的标签控制区域的实例Vue
let vm=new Vue({
  //render渲染函数，createElement()寻找App模板挂载至页面
  render: h => h(App),
  //注册实例Vue路由
  router,
  //注册Vuex状态管理
  store
}).$mount('#app')

