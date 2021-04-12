<template>
    <div class="components">
        <h1 class="subtitle">Education</h1>
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">Header</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p v-if="education">{{ education }}</p>
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
    name: "MyAccountPanelEducation",
    computed: {
        ...mapGetters('education', ['education'])
    }
}
</script>