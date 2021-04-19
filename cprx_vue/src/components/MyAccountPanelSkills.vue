<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">Skills</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p v-for="skill in skills" v-bind:key="skill.id">{{ skill.skill_name }}</p>
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
    name: "MyAccountPanelSkills",
    computed: {
        ...mapGetters('skills', ['skills'])
    }
}
</script>