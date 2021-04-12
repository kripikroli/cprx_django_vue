<template>
    <div class="components">
        <h1 class="subtitle">Licenses</h1>
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">Licenses</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p v-if="licenses">{{ licenses }}</p>
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
    name: "MyAccountPanelLicenses",
    computed: {
        ...mapGetters('licenses', ['licenses'])
    }
}
</script>