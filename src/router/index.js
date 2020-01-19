import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '@/components/frontend'
import Back from '@/components/backend'

Vue.use(VueRouter)

const routes = [
  {
    path:'/front',
    name:'frontend',
    component:Front
  },
  {
    path:'/back',
    name:'backend',
    component:Back
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
