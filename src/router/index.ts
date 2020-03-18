import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '../views/Work.vue'
import ThreeD from '../views/ThreeD.vue'
import About from '../views/About.vue'
import Live from '../views/Live.vue'
import PageNotFound from '../views/PageNotFound.vue'

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
  },
  {
    path: '/live',
    name: 'Live',
    component: Live
  },
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: './',
  routes
})

// Route case-sensitivity hotfix
if (router.mode === 'history') {
  // @ts-ignore
  router.history.getCurrentLocation = function() {
    let path = window.location.pathname;
    // @ts-ignore
    const base = router.history.base;

    // Removes base from path (case-insensitive)
    if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
      path = path.slice(base.length);
    }

    return (path || '/') + window.location.search + window.location.hash;
  }
}

export default router
