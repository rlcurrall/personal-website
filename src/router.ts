import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () =>
        import(/* webpackChunkName: "projects" */ './views/Projects'),
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import(/* webpackChunkName: "cv" */ './views/CV'),
    },
  ],
})
