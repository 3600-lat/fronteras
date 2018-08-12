import Vue from 'vue'
import Router from 'vue-router'
import Departamentos from '@/components/Departamentos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Departamentos',
      component: Departamentos
    }
  ]
})
