import Vue from 'vue'
import Router from 'vue-router'
import newsl from './views/newsl/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newsl',
      name: 'newsl',
      component: newsl
    }
  ]
})
