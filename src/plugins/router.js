import Vue from 'vue'
import VueRouter from 'vue-router'
// import i18n  from './i18n'

Vue.use(VueRouter)

function load(componentName) {
  return () => import(`@/views/${componentName}`)
}

const router = new VueRouter({
  mode: 'history',
  component: {
    template: '<router-view></router-view>'
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: load('Home')
    },
    {
      path: '/protfolio',
      name: 'Protfolio',
      component: load('Protfolio')
    },
    {
      name: 'Photos',
      path: '/photos',
      component: load('Photos')
    },
    {
      name: 'Gaming',
      path: '/gaming',
      component: load('Gaming')
    },
    {
      name: 'Support',
      path: '/support',
      component: load('Support')
    }
  ]
}) 

export default router