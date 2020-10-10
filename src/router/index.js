import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Recruitment from '../views/Recruitment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/Recruitment',
    name: 'recruitment',
    component: Recruitment
  },
]

const router = new VueRouter({
  routes
})

export default router
