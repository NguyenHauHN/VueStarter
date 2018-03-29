import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'localhost/me';

const store = new Vuex.Store({
  state: {
    me: window.localStorage.getItem(STORAGE_KEY) ? JSON.parse(window.localStorage.getItem(STORAGE_KEY)) : null
  },
  mutations: {
    updateLoggedInUser(state, payload){
      this.state.me = payload;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    }
  },
  getters: {
    me: state => state.me
  }
})



export default store;
