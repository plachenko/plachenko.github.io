import Vue from 'vue'
import VueRouter from 'vue-router'
import Work from '../views/Work.vue'
import Art from '../views/Art.vue'
import About from '../views/About.vue'
import Live from '../views/Live.vue'
import Log from '../views/Log.vue'
import Upload from '../views/Upload.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work
  },
  {
    path: '/art',
    name: 'Art',
    component: Art
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/log',
    name: 'Log',
    component: Log,
    props: (route: any) => ({query: route.query.q})
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload
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

function hasQueryParams(route: any){
  return !!Object.keys(route.query).length;
}

router.beforeEach((to, from, next) => {
  /*
  console.log(to, from);
  console.log(hasQueryParams(to), hasQueryParams(from));
  if(hasQueryParams(to) && !hasQueryParams(from)){
    // const toWithQuery: any = Object.assign({}, to, {query: from.query});
    // next(toWithQuery);
    // next({...to, query: from.query});
    next({name: to.name, query: from.query});
    // next();
  } else {
    next();
  }
  */
 next();
})

// Route case-sensitivity hotfix
if (router.mode === 'history') {
  (router as any).history.getCurrentLocation = function() {
    let path = window.location.pathname;
    const base = (router as any).history.base;

    // Removes base from path (case-insensitive)
    if (base && path.toLowerCase().indexOf(base.toLowerCase()) === 0) {
      path = path.slice(base.length);
    }

    return (path || '/') + window.location.search + window.location.hash;
  }
}

export default router
