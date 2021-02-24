import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iszhankai:-1,
    imgindex:1

  },
  mutations: {
    showStation (state) {
      state.showSite = true
    },

  },
  actions: {}
})
