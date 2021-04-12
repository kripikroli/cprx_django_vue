<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand ml-5">
        <router-link to="/" class="navbar-item">
          <strong>CarePartnerX</strong>
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">

          <template v-if="authenticated">

            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/dashboard/my-account" class="button is-light">My account</router-link>
              </div>
            </div>

          </template>

          <template v-else>
            <router-link to="/" class="navbar-item">Home</router-link>

            <div class="navbar-item">
              <div class="buttons">
                <router-link to="/signup" class="button is-success"><strong>Sign up</strong></router-link>
                <router-link to="/login" class="button is-light">Log in</router-link>
              </div>
            </div>

          </template>

        </div>
      </div>
    </nav>

    <section class="section">
      <router-view></router-view>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "App",
    beforeCreate() {
      this.$store.dispatch("auth/initialize");
    },
    computed: {
      ...mapGetters("auth", ["authenticated"])
    },
    methods: {
      ...mapActions("auth", ["initialize", "removeToken"]),
      ...mapActions("login", ["logout"])
    }
  };
</script>


<style lang="scss">
@import "../node_modules/bulma";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
</style>
