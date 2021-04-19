import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage'
import AboutUsPage from '@/views/AboutUsPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUsPage
  }
]
const scrollBehavior = function (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
const router = new VueRouter({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  },
  routes
})

export default router
