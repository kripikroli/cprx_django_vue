<template>
    <div class="components">
        <h1 class="subtitle">Certifications</h1>

        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">Certifications</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <div v-for="certification in certifications" v-bind:key="certification.id" class="mb-5">
                            <p class="mb-0"><strong>{{ certification.cert_name }}</strong> | {{ certification.cert_code }}</p>
                            <p class="mb-0" v-if="certification.expiration_date">Valid until {{ formatDate(certification.expiration_date) }} - <strong>{{ certification.is_active ? 'Active' : 'Not active'}}</strong></p>
                            <p class="mb-0">Issued in the state of {{ certification.region }}, {{ certification.country }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
    name: "MyAccountPanelCertifications",
    computed: {
        ...mapGetters('certifications', ['certifications'])
    },
    methods: {
        formatDate(str) {
            return moment(new Date(str)).format("LL");
        },
    },
}
</script>