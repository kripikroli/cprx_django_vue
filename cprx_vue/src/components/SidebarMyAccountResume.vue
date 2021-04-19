<template>
    <div class="component">
        <p class="menu-label is-hidden-touch">RESUME & CV</p>
            <ul class="menu-list mb-5">
            <li>
                <a @click="executeEducation()" v-bind:class="sections.education">
                <span class="icon"><i class="fas fa-graduation-cap"></i></span> Education
                </a>
            </li>
            <li>
                <a @click="executeLicenses()" v-bind:class="sections.licenses">
                <span class="icon"><i class="fas fa-id-card"></i></span> Licenses
                </a>
            </li>
            <li>
                <a @click="executeCertifications()" v-bind:class="sections.certifications">
                <span class="icon"><i class="fas fa-certificate"></i></span> Certifications
                </a>
            </li>
            <li>
                <a @click="executeSkills()" v-bind:class="sections.skills">
                <span class="icon"><i class="fas fa-bolt"></i></span> Skills
                </a>
            </li>
            <li>
                <a @click="executeReferences()" v-bind:class="sections.references">
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
        ...mapActions('vars', ['toggle']),
        ...mapActions('education', ['getEducation']),
        ...mapActions('licenses', ['getLicenses']),
        ...mapActions('certifications', ['getCertifications']),
        ...mapActions('skills', ['getSkills']),
        ...mapActions('references', ['getReferences']),
        executeEducation() {
            this.toggle('education')
            this.getEducation()
        },
        executeLicenses() {
            this.toggle('licenses')
            this.getLicenses()
        },
        executeCertifications() {
            this.toggle('certifications')
            this.getCertifications()
        },
        executeSkills() {
            this.toggle('skills')
            this.getSkills()
        },
        executeReferences() {
            this.toggle('references')
            this.getReferences()
        }
    },
}
</script>