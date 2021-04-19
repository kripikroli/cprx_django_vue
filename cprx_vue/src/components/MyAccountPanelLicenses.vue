<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title subtitle is-5">Licenses</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <div v-for="license in licenses" v-bind:key="license.id" class="mb-5">
                            <p class="mb-0"><strong>{{ license.license_name }}</strong> | {{ license.license_code }}</p>
                            <p class="mb-0">Valid until {{ formatDate(license.expiration_date)}} - <strong>{{ license.is_active ? 'Active' : 'Not active'}}</strong></p>
                            <p class="mb-0">Issued by the state of {{ license.region }}, {{ license.country }}</p>
                            <p class="mb-0">This license is <strong>{{ license.is_compact ? 'compact' : 'not compact' }}</strong></p>
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
    name: "MyAccountPanelLicenses",
    computed: {
        ...mapGetters('licenses', ['licenses'])
    },
    methods: {
        formatDate(str) {
            return moment(new Date(str)).format("LL");
        },
    },
}
</script>