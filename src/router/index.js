import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('components/home.vue')
const itemize = () => import('components/itemize.vue')
const shopcar = () => import('components/shopcar.vue')
const mine = () => import('components/mine.vue')
const detail = () => import('components/detail.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/itemize',
      component: itemize
    },
    {
      path: '/shopcar',
      component: shopcar
    },
    {
      path: '/mine',
      component: mine
    },
	{
	  path: '/detail/:iid',
	  component: detail
	}
  ],
  mode: 'history'
})