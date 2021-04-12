<template>
    <div class="component">
        <p class="menu-label is-hidden-touch">RESUME & CV</p>
            <ul class="menu-list mb-5">
            <li>
                <a @click="toggle('education')" v-bind:class="sections.education">
                <span class="icon"><i class="fas fa-graduation-cap"></i></span> Education
                </a>
            </li>
            <li>
                <a @click="toggle('licenses')" v-bind:class="sections.licenses">
                <span class="icon"><i class="fas fa-id-card"></i></span> Licenses
                </a>
            </li>
            <li>
                <a @click="toggle('certifications')" v-bind:class="sections.certifications">
                <span class="icon"><i class="fas fa-certificate"></i></span> Certifications
                </a>
            </li>
            <li>
                <a @click="toggle('skills')" v-bind:class="sections.skills">
                <span class="icon"><i class="fas fa-bolt"></i></span> Skills
                </a>
            </li>
            <li>
                <a @click="toggle('references')" v-bind:class="sections.references">
                <span class="icon"><i class="fas fa-people-arrows"></i></span> References
                </a>
            </li>
            </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "SidebarMyAccountResume",
    computed: {
        ...mapGetters('vars', ['sections'])
    },
    methods: {
        ...mapActions('vars', ['toggle'])
    },
}
</script>