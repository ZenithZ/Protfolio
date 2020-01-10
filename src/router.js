import Vue from 'vue'
import VueRouter from 'vue-router'
// import i18n  from './i18n'

Vue.use(VueRouter);

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
      name: 'List',
      path: '/list',
      component: load('List')
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
      name: 'CV',
      path: '/cv',
      component: load('CV')
    },
    {
      name: 'Enquiry',
      path: '/enquiry',
      component: load('Enquiry')
    }
  ]
}) 

export default router