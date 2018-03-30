<template>
  <div>
    <div>{{count}}</div>
    <button type="button" @click="increments()">+</button>
    <button type="button" @click="decrements()">-</button>

    <div v-for="item in doneTodos">
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'Home',
    created() {
    },
    mounted() {
    },
    methods: {
      increments() {
        this.$store.commit('increments', 5)
      },
      decrements() {
        this.$store.commit('decrements')
      }
    },
    computed: {
      ...mapState({
        // arrow functions can make the code very succinct!
        count: state => state.count
      }),
      ...mapGetters([
        'doneTodos'
      ])
    }
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

