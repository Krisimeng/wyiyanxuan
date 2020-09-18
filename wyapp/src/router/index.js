import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component:()=>import(/* webpackChunkName:"home" */'../views/Home'),
    redirect:'/goods',
    children:[
      {
        path:'goods',
        name:'goods',
        component:()=>import(/* webpackChunkName:"goods" */'../views/Goods')
      },
      {
        path:'category',
        name:'category',
        component:()=>import(/* webpackChunkName:"category" */'../views/Category')
      },
      {
        path:'mycart',
        name:'mycart',
        component:()=>import(/* webpackChunkName:"mycart" */'../views/Mycart')
      },
      {
        path:'truthy',
        name:'truthy',
        component:()=>import(/* webpackChunkName:"truthy" */'../views/Truthy')
      },
      {
        path:'user',
        name:'user',
        component:()=>import(/* webpackChunkName:"user" */'../views/User')
      }
    ]
  },
  {
    path:'**',
    redirect:"/goods"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
