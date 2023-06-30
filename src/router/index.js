// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'


const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },



  {
    path: '/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/Xiaogu',
    name: 'Xiaogu',
    component: () => import('../views/XiaoguView.vue')
  },
  {
    path: '/New',
    name: 'New',
    component: () => import('../views/NewView/NewView.vue')
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: () => import('../views/NewView/ShopView.vue')
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/NewView/CartView.vue')
  },
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/NewView/MyView.vue')
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import('../views/NewView/MainView.vue')
  },
  {
    path: '/List',
    name: 'List',
    component: () => import('../views/NewView/ListView.vue')
  },
  {
    path: '/Movie',
    name: 'Movie',
    component: () => import('../views/NewView/MovieView.vue')
  },
  {
    path: '/Login1',
    name: 'Login1',
    component: () => import('../views/NewView/LoginView.vue')
  }
  ,
  {
    path: '/Deta',
    name: 'Deta',
    component: () => import('../views/NewView/DetaView.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
