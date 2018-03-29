<template>
  <div class="hello">
      <div>
        <img :src="me.avatar" height="150" width="150" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['user'],
  created () {
  },
  mounted () {
  },
  data () {
    return {

    }
  },
  computed: {
    me () {
      return this.user;
    }
  },
  methods: {
  },
  components: {
  },
}
</script>

