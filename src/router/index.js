import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Main from '@/components/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
   
  ]
})
