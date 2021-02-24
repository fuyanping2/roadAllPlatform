import router from './router'

import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({
  showSpinner: false
})

router.beforeEach((to, from, next) => {
  NProgress.start() // 进度条开始

  if (to.path === '/') {
    localStorage.clear()
    // next('/oneBus')
    next('/newsl')
  } else {
    next()
  }

  // if (to.path === '/login') {
  //   sessionStorage.clear()
  //   next()
  // } else {
  //   if (sessionStorage.getItem('isLogin')) {
  //     next()
  //   } else {
  //     next('/login')
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
