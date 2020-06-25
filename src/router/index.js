import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const Home = ()=> import("views/home/Home")
const Cart = ()=> import("views/cart/Cart")
const User = ()=> import("views/user/User")
const Category = ()=> import("views/category/Category")
const ProductInfo = ()=> import("views/productInfo/ProductInfo")



const router = new VueRouter({
  routes:[
    {
      path:'/productInfo',
      name:'ProductInfo',
      component:ProductInfo
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/user',
      name:'User',
      component:User
    },
    {
      path:'/category',
      name:'Category',
      component:Category
    },
    {
      path:'/',
      redirect:'/home'
    }
  ],
  mode:'history'
})

export default router
