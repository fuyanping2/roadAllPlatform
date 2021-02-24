import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import 'normalize.css' // 样式重置
import 'swiper/dist/css/swiper.css' // swiper

import ElementUI from 'element-ui' // ElementUI
import 'element-ui/lib/theme-chalk/index.css'
import API from './api/index'
import 'jquery' // jquery
import common from './libs/common.js' // 自定义包
import './permission.js' // 路由判断
import 'echarts-gl'
// import Video from 'video.js'
// import 'video.js/dist/video-js.css'
Vue.prototype.$API = API
// Vue.prototype.$video = Video
Vue.use(ElementUI)
Vue.use(common)
Vue.use(animated)
Vue.config.productionTip = false
Vue.prototype.IP = 'http://10.1.30.210:50081'
Vue.prototype.IP = 'http://101.231.47.116:50081'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
