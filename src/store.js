import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iszhankai: false,
    showSite: false, // 导航栏站点数的弹框
    showvideo: false, // 实时视频的弹框
    yhsvideo: false, // 实时视频的弹框
    jhzsvideo: false, // 计划总数的弹框
    yssvideo: false, // 已实施的弹框
    zxgzinfo: false, // 专项工作的弹框
    ypmxpop: false, // 研判模型的弹窗
    tfxxpop: false, // 突发信息的弹框
    istzqtl: false, // 调整前后的图例
    xinftspup: false, // 信访投诉的弹框
    cinftslj: 0, // 信访投诉的弹框
    yizyictable: false, // zhence
    isyzyctu: true, // zhence
    indexTablesa: 0,

    sjfxdetailpop: false, // 数据分析发现详情的弹框
  },
  mutations: {
    showStation (state) {
      state.showSite = true
    },
    hideStation (state) {
      state.showSite = false
    },
    shownowVideo (state) {
      state.showvideo = true
    },
    hidenowVideo (state) {
      state.showvideo = false
    },
    showyhsVideo (state) {
      state.yhsvideo = true
    },
    hideyhsVideo (state) {
      state.yhsvideo = false
    },
    showjhzsVideo (state) {
      state.jhzsvideo = true
    },
    hidejhzsVideo (state) {
      state.jhzsvideo = false
    },
    showyss (state) {
      state.yssvideo = true
    },
    hideyss (state) {
      state.yssvideo = false
    },
    showzxgz (state) {
      state.iszhankai = false
      state.zxgzinfo = true
    },
    hidezxgz (state) {
      state.zxgzinfo = false
    },
    showypmxpop (state) {
      state.ypmxpop = true
    },
    hideypmxpop (state) {
      state.ypmxpop = false
    },
    showtfxxpop (state) {
      state.tfxxpop = true
    },
    hidetfxxpop (state) {
      state.tfxxpop = false
    }
  },
  actions: {}
})
