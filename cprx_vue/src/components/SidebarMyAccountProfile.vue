<template>
    <div class="component">
        <p class="menu-label is-hidden-touch">YOUR PROFILE</p>
        <ul class="menu-list mb-5">
            <li>
                <a @click="executeSecurity()" v-bind:class="sections.security">
                <span class="icon"><i class="fas fa-fingerprint"></i></span> Login Security
                </a>
            </li>
            <li>
                <a @click="executePersonal()" v-bind:class="sections.personal">
                <span class="icon"><i class="fas fa-user-secret"></i></span> Personal Details
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "SidebarMyAccountProfile",
    computed: {
        ...mapGetters('vars', ['sections'])
    },
    methods: {
        ...mapActions('vars', ['toggle']),
        ...mapActions('personal', ['getPersonal']),
        executeSecurity() {
            this.getSecurity()
            this.toggle('security')
        },
        executePersonal() {
            this.toggle('personal')
            this.getPersonal()
        }
    },
}
</script>