<template>
    <div class="components">
        <p class="menu-label is-hidden-touch">SYSTEM SETTINGS</p>
            <ul class="menu-list mb-5">
            <li>
                <a @click="toggle('notifications')" v-bind:class="sections.notifications">
                <span class="icon"><i class="fas fa-bell"></i></span> Notifications
                </a>
            </li>
            <li>
                <a @click="toggle('messages')" v-bind:class="sections.messages">
                <span class="icon"><i class="fas fa-envelope-open-text"></i></span> Messages
                </a>
            </li>
            <li>
                <a @click="logout()" class="">
                <span class="icon"><i class="fas fa-sign-out-alt"></i></span> Logout
                </a>
            </li>
            </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "SidebarMyAccountSystem",
    computed: {
        ...mapGetters('vars', ['sections'])
    },
    methods: {
        ...mapActions('vars', ['toggle']),
        ...mapActions('login', ['logout'])
    },
}
</script>