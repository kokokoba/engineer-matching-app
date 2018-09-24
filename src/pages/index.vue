<!--<template>-->
  <!--<div>-->
    <!--<h1>Hi!</h1>-->
    <!--<button @click="login">Login</button>-->
    <!--<router-link to="/foo">/foo</router-link>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--async asyncData({app}) {-->
      <!--console.log('asyncData: '+ app.$axios.defaults.baseURL)-->
      <!--return {}-->
    <!--},-->
    <!--async fetch({app}) {-->
      <!--console.log('fetch: '+ app.$axios.defaults.baseURL)-->
    <!--},-->
    <!--async mounted() {-->
      <!--console.log('mounted: '+ this.$axios.defaults.baseURL)-->
    <!--},-->
    <!--async created() {-->
      <!--console.log('created: '+ this.$axios.defaults.baseURL)-->
    <!--},-->
    <!--methods: {-->
      <!--async login () {-->
        <!--this.$store.dispatch('login', {-->
          <!--$axios: this.$axios,-->
          <!--user: this.user-->
        <!--})-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->


<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        src
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

