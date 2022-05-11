import Vue from 'vue'
import App from './App.vue'
import { NavbarPlugin, PopoverPlugin, ButtonPlugin } from 'bootstrap-vue'

import VueRouter from 'vue-router'

import VueI18n from 'vue-i18n'
import zh from './i18n/zh'
import en from './i18n/en'
import es from './i18n/es'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(VueRouter)
Vue.use(NavbarPlugin)
Vue.use(PopoverPlugin)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    zh: zh,
    en: en,
    es: es
  }
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
