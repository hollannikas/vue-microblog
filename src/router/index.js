import Vue from 'vue'
import Router from 'vue-router'
import Blogs from '@/components/Blogs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Blogs',
      component: Blogs
    }
  ]
})
