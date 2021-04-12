<template>
    <div class="component">
        <p class="menu-label is-hidden-touch">YOUR PROFILE</p>
        <ul class="menu-list mb-5">
            <li>
                <a href="#" v-bind:class="is_active">
                <span class="icon"><i class="fas fa-fingerprint"></i></span> Login Security
                </a>
            </li>
            <li>
                <a href="#" class="">
                <span class="icon"><i class="fas fa-user-secret"></i></span> Personal Details
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "SidebarMyAccountProfile",
    computed: {
        ...mapGetters('vars', ['is_active'])
    }
}
</script>