<template>
  <div class="page-my-account">
    <h1 class="title">My Account</h1>
    <div class="main-content columns is-fullheight">
        <aside
            class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"
        >
        <SidebarMyAccount />
        </aside>
        <div class="container column is-10">
                <MyAccountPanel />
        </div>
    </div>
  </div>
</template>

<script>
import SidebarMyAccount from "../components/SidebarMyAccount"
import MyAccountPanel from "../components/MyAccountPanel"

export default {
  name: "MyAccount",
  components: {
      SidebarMyAccount,
      MyAccountPanel
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  #menu-toggle:checked + .nav-menu {
    display: block;
  }
}
</style>
