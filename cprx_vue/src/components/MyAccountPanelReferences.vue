<template>
    <div class="components">
        <h1 class="subtitle">References</h1>

        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">References</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <div v-for="reference in references" v-bind:key="reference.id" class="mb-5">
                            <p class="mb-0" v-if="reference.start_date || reference.end_date"><strong class="mr-5"></strong>{{ formatDate(reference.start_date) }} to {{ formatDate(reference.end_date) }}</p>
                            <p class="mb-0" v-if="reference.name"><strong class="mr-5">Name:</strong> {{ reference.name }}</p>
                            <p class="mb-0" v-if="reference.email"><strong class="mr-5">Email:</strong> {{ reference.email }}</p>
                            <p class="mb-0" v-if="reference.phone_number"><strong class="mr-5">Phone:</strong> {{ formatPhoneNumber(reference.phone_number) }}</p>
                            <p class="mb-0" v-if="reference.facility_name"><strong class="mr-5">Facility:</strong> {{ reference.facility_name }}</p>
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
    name: "MyAccountPanelReferences",
    computed: {
        ...mapGetters('references', ['references'])
    },
    methods: {
        formatPhoneNumber(str) {
            let cleaned = ("" + str).replace(/\D/g, "");
            let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                let intlCode = match[1] ? "+1 " : "";
                return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join(
                ""
                );
            }
            return null;
        },
        formatDate(str) {
            return moment(new Date(str)).format("LL");
        },
    },
}
</script>