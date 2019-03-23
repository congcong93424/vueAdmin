import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import data from './modules/data'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    data
  },
  getters
})

export default store
