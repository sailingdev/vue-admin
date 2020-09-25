import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    splashScreen: true,
    logged: false,
    url: '',
    uploadModal: false
  },
  mutations: {
    setLogin (state) {
      state.logged = true
    },
    setLogout (state) {
      state.logged = false
    },
    setSplashScreen (state, payload) {
      state.splashScreen = payload
    },
    setUrl (state, payload) {
      state.url = payload
    },
    setUploadModal (state, payload) {
      state.uploadModal = payload
    }
  },
  actions: {},
  getters: {
    isLogged (state, getters) {
      return state.logged
    },
    splashScreen (state, getters) {
      return state.splashScreen
    },
    getUrl (state) {
      return state.url
    },
    uploadModal (state) {
      return state.uploadModal
    }
  }
})
