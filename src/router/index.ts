import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '../views/Work.vue'
import ThreeD from '../views/ThreeD.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/3D',
    name: 'ThreeD',
    component: ThreeD
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
