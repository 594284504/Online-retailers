
import VueRouter from 'vue-router';

import home from '../components/tabbarComponent/home.vue'
import classify from '../components/tabbarComponent/classify.vue'
import cart from '../components/tabbarComponent/cart.vue'
import my from '../components/tabbarComponent/my.vue'
import detail from '../components/goodDetail/detail.vue'
let router=new VueRouter({
    routes:[

        {path:'/',component:home},
        {path:'/home',component: home},
        {path:'/class',component: classify},
        {path:'/car',component: cart},
        {path:'/my',component: my},
        {path:'/detail/:id',component: detail}
    ],
    linkActiveClass:'mui-active'
})

export default router