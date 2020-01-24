import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    change: false,
    mode: "light"
  },
  mutations: {
    darkMode (state) {
      state.change = true
      state.mode = "dark"
    },
    lightMode(state) {
      state.change = false
      state.mode = "light"
    }
  },
  actions: {
     click({commit, state}){
      if(state.change == false){
        commit('darkMode')
        }else{
        commit('lightMode')
        }
     }
  },
  modules: {
  }
})
