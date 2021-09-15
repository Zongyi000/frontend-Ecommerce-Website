import Vue from 'vue'
import Router from 'vue-router'
import battlefield5 from '@/components/battlefield5'
import ebay from '@/components/ebay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'battlefield5'
    },
    {
      path: '/battlefield5',
      name: 'battlefield5',
      component: battlefield5
    },
    {
      path: '/ebay',
      name: 'Ebay',
      component: ebay
    },
    {
      path: '*',
      redirect: 'battlefield5'
    }
  ]
})
