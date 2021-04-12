<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">Personal details </p>

                </div>
                <div class="card-content">
                    <div class="content">
                        
                        <p v-if="personal">{{ personal }}</p>
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
    name: "MyAccountPanelPersonal",
    computed: {
        ...mapGetters('personal', ['personal']),
    },


}
</script>