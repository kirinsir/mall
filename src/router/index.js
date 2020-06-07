import Vue from 'vue'
import VueRouter from 'vue-router'
import cart from '../views/cart';
import home from '../views/home';
import my from '../views/my';
import fenlei from '../views/fenlei';


Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'home',
    component:()=>import('../views/home')
    
  },
  {
    path:'/cart',
    name:'cart',
    component:()=>import('../views/cart')
  },
  {
    path:'/my',
    name:'my',
    component:()=>import('../views/my')
  },
  {
    path:'/fenlei',
    name:'fenlei',
    component:()=>import('../views/fenlei')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
