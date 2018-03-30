import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    number: 0,
    todos: [
      {id: 1, text: "Todo one", done: true},
      {id: 2, text: "Todo two", done: true},
      {id: 3, text: "Todo three", done: false}
    ]
  },
  mutations: {
    increments(state, number) {
      state.count += number;
    },
    decrements(state) {
      state.count--;
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
})


export default store;
