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
                        <p v-if="certifications"> {{ certifications }}</p>
                    </div>
                </div>
            </div>
            <br />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "MyAccountPanelCertifications",
    computed: {
        ...mapGetters('certifications', ['certifications'])
    }
}
</script>