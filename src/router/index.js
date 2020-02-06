import Vue from 'vue'
import VueRouter from 'vue-router'
import Front from '@/components/frontend'
import Back from '@/components/backend'
import Propos from '@/components/propos'
import Projet from '@/components/projet'
import Contact from '@/components/contact'
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
  },
  {
    path:'/propos',
    name:'propos',
    component:Propos
  },
  {
    path:'/projet',
    name:'projet',
    component:Projet
  },
  {
    path:'/contact',
    name:'contact',
    component:Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
