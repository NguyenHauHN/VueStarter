<template>
  <section class="todoapp mx-auto" style="width: 400px;">
    <header class="header">
      <h2>Todos</h2>
      <input v-model="newTodo"
             placeholder="What needs to be done?"
             autocomplete="off"
             autofocus
             class="new-todo form-control input-lg"
             @keyup.enter="addTodo()"
      />
    </header>
    <section class="main mt-3" v-cloak style="min-height: 150px; border: 1px solid #eee;">
      <div v-if="todos.length > 0">
        <ul class="list-group">
          <li class="list-group-item d-flex flex-row justify-content-between" v-for="(item, index) in todos">
            <div>
              <input type="checkbox" aria-label="Checkbox for following text input" v-model="item.active">
              <span>{{item.value}}</span>
            </div>
            <div>
              <button type="button" class="btn btn-block" @click="removeTodo(index)">x</button>
            </div>
          </li>
        </ul>
      </div>

    </section>
    <section class="footer mt-3">
      <button type="button" class="btn btn-secondary">All</button>
      <button type="button" class="btn btn-secondary" @click="filterActiveTodo()">Active</button>
    </section>
  </section>
</template>

<script>

  export default {
    name: 'Home',
    created() {
    },
    mounted() {
    },
    data() {
      return {
        todos: [],
        newTodo: ''
      }
    },
    methods: {
      addTodo() {
        let value = this.newTodo && this.newTodo.trim()

        if (!value) return

        this.todos.push({
          value: value,
          active: false
        });
        this.newTodo = "";
      },

      filterActiveTodo() {
        this.todos = this.todos.filter(item => {
          return item.active;
        })
      },

      removeTodo(index){
        console.log(index);

        this.todos.splice(index, 1)
        console.log(this.todos)
      }
    },
    computed: {}
  }
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }

  li.list-group-item {
    text-align: left;
  }
</style>

