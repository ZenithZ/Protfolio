import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './i18n'

import App from './App.vue'

Vue.use(BootstrapVue)
library.add(faFontAwesome)
Vue.use(ElementUI);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('Header', require('./components/Header.vue').default)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
