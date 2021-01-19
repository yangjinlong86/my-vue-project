import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BlogList from '@/components/BlogList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/blogs',
      name: 'BlogList',
      component: BlogList
    }
  ]
})
