import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(componentName) {
  return () => import(`@/views/${componentName}`)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: load('Home')
    },
    {
      path: '/eduacation',
      name: 'Eduacation',
      component: load('Eduacation')
    }
  ]
}) 

export default router