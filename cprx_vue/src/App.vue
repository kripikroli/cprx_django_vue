<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="container">
        <div class="navbar-brand ml-5">
          <router-link to="/" class="navbar-item">
            <img class="image is-48x48 mr-3" src="./assets/logo.png"> <span class="is-size-3">CarePartneRx</span>
          </router-link>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-cprx">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

        </div>

        <div id="navbar-cprx" class="navbar-menu">
          <div class="navbar-end">

            <template v-if="authenticated">
              <router-link to="/dashboard" class="navbar-item">Home</router-link>
              <router-link to="/dashboard/contact" class="navbar-item">Contact Us</router-link>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  <img class="image is-32x32 mr-3" src="./assets/logo.png">
                </a>

                <div class="navbar-dropdown">
                  <router-link to="/dashboard/my-account" class="navbar-item">My Account</router-link>
                  
                  <a class="navbar-item">
                    Messages
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>

            </template>

            <template v-else>
              
              <router-link to="/" class="navbar-item">Home</router-link>

              <div class="navbar-item">
                <div class="buttons">
                  <router-link to="/signup" class="button is-primary"><strong>Sign up</strong></router-link>
                  <router-link to="/login" class="button is-light">Log in</router-link>
                </div>
              </div>

            </template>

          </div>
        </div>
      </div>
    </nav>

    

    <section class="section container">
      <router-view></router-view>
    </section>

    <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>CarePartneRx</strong> powered by <a href="http://primohealthcareservices.com/"> Primo Healthcare Services, LLC</a>. All rights reserved (©) 2021. 
          </p>
        </div>
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
    },
  };
</script>


<style lang="scss">
@import "../node_modules/bulma";
@import "../node_modules/bulma-steps-component/bulma-steps.sass";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");

body {
  background-color: #fff;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
    min-height: 3.25rem;
}

.navbar-item img {
    max-height: 3.25rem;
}

</style>
