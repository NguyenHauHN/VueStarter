<template>
  <div class="hello">
    <Header v-if="me" :user="me.user"></Header>
    <h1>Home</h1>
    <button class="btn" @click="activeQuery = !activeQuery">activeQuery</button>
    <div class="container" v-if="!me">
      <div class="d-flex flex-row justify-content-center">
        <div style="width: 360px;">
          <form @submit="submit">
            <div class="form-group">
              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"
                     v-model="vm.email">
            </div>
            <div class="form-group">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                     v-model="vm.password" @keyup.13="submit"
              >
            </div>
            <button class="btn btn-md btn-block" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="!$apollo.queries.users.loading && users">
      <div v-for="item in users.results">
        <h5>{{ item._id }}</h5>
      </div>
    </div>
    <NestedView1 v-if="me"></NestedView1>
    <NestedView2 v-if="me"></NestedView2>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {QUERY} from "../graphql";
import NestedView1 from '@/components/NestedView1'
import NestedView2 from '@/components/NestedView2'
import Header from '@/components/Header'

export default {
  name: 'Home',
  created () {
  },
  mounted () {
  },
  data () {
    return {
      users: null,
      activeQuery: true,
      vm: {
        email: 'bfontaine1@dell.com',
        password: 'hello123123'
      },
      limit: 10,
      offset: 0
    }
  },
  methods: {
    submit() {
      console.log(this.vm)
      let loginApi = 'https://auth.mathover.com:7999/auth/login'
      this.$http.post(loginApi, this.vm).then(
        (response) => {
          this.$store.commit('updateLoggedInUser', response.data)
        }
      )
    }
  },
  computed: {
    ...mapGetters([
      'me'
    ])
  },
  apollo: {
    users: {
      query: QUERY.users,
      variables() {
        return {
          limit: this.limit,
          offset: this.offset
        }
      },
      skip(){
        return this.activeQuery
      }
    }
  },
  components: {
    NestedView1,
    NestedView2,
    Header
  }
}
</script>

