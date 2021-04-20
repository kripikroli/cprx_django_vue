<template>
  <div class="page-my-account">
    <h1 class="title">My Account</h1>
    <div class="main-content columns is-fullheight">
        <aside
            class="column is-3 is-narrow-mobile is-fullheight section is-hidden-mobile"
        >
        <SidebarMyAccount />
        </aside>

        <div class="container column is-9" v-show="panels.security">
                <MyAccountPanelSecurity />
        </div>

        <div class="container column is-9" v-show="panels.personal">
                <MyAccountPanelPersonal />
        </div>

        <div class="container column is-9" v-show="panels.education">
                <MyAccountPanelEducation />
        </div>

        <div class="container column is-9" v-show="panels.licenses">
                <MyAccountPanelLicenses />
        </div>

        <div class="container column is-9" v-show="panels.certifications">
                <MyAccountPanelCertifications />
        </div>

        <div class="container column is-10" v-show="panels.skills">
                <MyAccountPanelSkills />
        </div>

        <div class="container column is-9" v-show="panels.references">
                <MyAccountPanelReferences />
        </div>

        <div class="container column is-9" v-show="panels.notifications">
                <MyAccountPanelNotifications />
        </div>

        <div class="container column is-9" v-show="panels.messages">
                <MyAccountPanelMessages />
        </div>


    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import SidebarMyAccount from "../components/SidebarMyAccount"
import MyAccountPanel from "../components/MyAccountPanel"
import MyAccountPanelSecurity from "../components/MyAccountPanelSecurity"
import MyAccountPanelPersonal from "../components/MyAccountPanelPersonal"
import MyAccountPanelEducation from "../components/MyAccountPanelEducation"
import MyAccountPanelLicenses from "../components/MyAccountPanelLicenses"
import MyAccountPanelCertifications from "../components/MyAccountPanelCertifications"
import MyAccountPanelSkills from "../components/MyAccountPanelSkills"
import MyAccountPanelReferences from "../components/MyAccountPanelReferences"
import MyAccountPanelNotifications from "../components/MyAccountPanelNotifications"
import MyAccountPanelMessages from "../components/MyAccountPanelMessages"


export default {
  name: "MyAccount",
  computed: {
    ...mapGetters('vars', ['panels'])
  },
  components: {
      SidebarMyAccount,
      MyAccountPanel,
      MyAccountPanelSecurity,
      MyAccountPanelPersonal,
      MyAccountPanelEducation,
      MyAccountPanelLicenses,
      MyAccountPanelCertifications,
      MyAccountPanelSkills,
      MyAccountPanelReferences,
      MyAccountPanelNotifications,
      MyAccountPanelMessages
  },
  methods: {
    ...mapActions('vars', ['init'])
  },
  mounted() {
    this.init()
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
