<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">Skills</p>
                </div>
                <div class="card-content">
                    <div class="content">

                       <div v-for="skill in skills" v-bind:key="skill.id" class="mb-3">
                            
                            <article class="message is-success">
                                <div class="message-body">
                                    <div class="columns is-multiline">
                                        <div class="column is-10">
                                            <p><strong>{{ skill.skill_name }}</strong></p>
                                            <p>{{ skill.skill_details }}</p>
                                        </div>

                                        <div class="column is-2">
                                            <p class="is-pulled-right">
                                                <button @click="deleteSkills(skill.id)" class="button is-danger is-outlined mr-3"><span class="icon is-small"><i class="far fa-trash-alt"></i></span></button>

                                                <button @click="showUpdateModal(skill)" class="button is-success is-outlined"><span class="icon is-small"><i class="far fa-edit"></i></span></button>
                                            
                                            </p>
                                        </div>
                                        <div class="is-clearfix"></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div>

                            <button @click="showAddModal" class="button is-success is-outlined is-pulled-right"><span class="icon is-small"><i class="fas fa-plus"></i></span></button>
                        </div> 
                        <div class="is-clearfix"></div>
                    </div>

                </div>
            </div>
            <br />
        </div>

        <!-- start modal -->
        <div :class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <div class="content">

                        <div class="field">
                            <label class="label">Skill</label>
                            <div class="control">
                                <input v-model="_skills.skill_name" type="text" class="input" placeholder="e.g. Work Ethic">
                            </div>
                            <p v-if="nvname" class="help is-danger">Invalid field.</p>
                            <div class="control">
                                <textarea v-model="_skills.skill_details" class="textarea mt-3" placeholder="Describe your skill here..." rows="10"></textarea>
                            </div>
                            <p v-if="nvdetails" class="help is-danger">Invalid field.</p>
                        </div>

                        
                        <div class="buttons is-pulled-right mt-5">
                            <div class="button is-danger" @click="close()">Cancel</div>
                            <div class="button is-success" @click="submit()">Submit</div>
                        </div>

                        <div class="is-clearfix"></div>


                    </div>
                </div>
            </div>
            <button @click="close" class="modal-close is-large" aria-label="close"></button>
        </div>
        <!-- end modal -->

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "MyAccountPanelSkills",
    computed: {
        ...mapGetters('skills', ['skills', 'isEmpty'])
    },
    data() {
        return {
            _skills: {},
            modal: 'modal',
            update: false,

            // validations

            nvname: false,
            nvdetails: false
        }
    },
    methods: {
        ...mapActions('skills', ['addSkills', 'updateSkills', 'deleteSkills']),
        showAddModal() {
            this.turnOff()
            this._skills = {}
            this.modal = 'modal is-active'
        },
        showUpdateModal(skill) {
            this.turnOff()
            this._skills = {...skill}
            this.modal = 'modal is-active'
            this.update = true
        },
        close() {
            this.modal = 'modal'
        },
        submit() {
            this.turnOff()
            if (this.validateForm()) {
                if (this.update) {
                    this.updateSkills(this._skills)
                }
                else {
                    this.addSkills(this._skills)
                }
                this.update = false
                this.modal = 'modal'
            }
        },
        validateForm() {
            if (this._skills.skill_name && this._skills.skill_details) {
                return true
            } else {
                this.turnOff()
                if (!this._skills.skill_name) {this.nvname=true}
                if (!this._skills.skill_details) {this.nvdetails=true}
                return false
            }
        },
        turnOff() {
            this.nvname = false
            this.nvdetails = false
        }

    },
}
</script>

<style scoped>
.tox .tox-statusbar {
    display: none;
}
</style>

