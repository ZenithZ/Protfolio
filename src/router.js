import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load(componentName) {
  return () => import(`@/components/${componentName}`)
}

const router = new VueRouter({
  mdoe: 'history',
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