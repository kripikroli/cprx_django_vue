<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title subtitle is-5">Educational attainment</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <div v-for="item in education" v-bind:key="item.id" class="mb-3">
                            
                            <article class="message is-success">
                                <div class="message-body">
                                    <div class="columns is-multiline">
                                        <div class="column is-6">
                                            <p class="is-capitalized"><strong>{{ item.degree_type }} | {{ item.field_name }}</strong>
                                            <br>{{ item.school_name }}
                                            <br>{{ item.region }}, {{ item.country }}
                                            <br>Graduated in the year {{ item.year_graduated }}.
                                            
                                            </p>
                                        </div>

                                        <div class="column is-6">
                                            <p class="is-pulled-right">
                                                <button @click="deleteEducation(item.id)" class="button is-danger is-outlined mr-3"><span class="icon is-small"><i class="far fa-trash-alt"></i></span></button>

                                                <button @click="showUpdateModal(item)" class="button is-success is-outlined"><span class="icon is-small"><i class="far fa-edit"></i></span></button>
                                            
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
                        
                        <div class="columns is-multiline">
                            <div class="column">
                                <div class="field">
                                    <legend class="label">School name</legend>
                                    <div class="control">
                                        <input v-model="_education.school_name" class="input" type="text" placeholder="i.e. Caldwell University">
                                    </div>
                                    <p v-if="nvschool" class="help is-danger">Invalid field.</p>
                                </div>

                                <div class="field">
                                    <legend class="label">Field name</legend>
                                    <div class="control">
                                        <input v-model="_education.field_name" class="input" type="text" placeholder="i.e. Nursing">
                                    </div>
                                    <p v-if="nvfield" class="help is-danger">Invalid field.</p>
                                </div>

                                <div class="field">
                                    <legend class="label">Degree type</legend>
                                    <div class="select is-fullwidth">
                                        <select v-model="_education.degree_type">
                                            <option value="associate">Associate</option>
                                            <option value="bachelor">Bachelor</option>
                                            <option value="master">Masters</option>
                                            <option value="doctorate">Doctorate</option>
                                        </select>
                                    </div>
                                    <p v-if="nvdegree" class="help is-danger">Invalid field.</p>
                                </div>

                                <div class="field">
                                    <legend class="label">State</legend>
                                    <div class="control">
                                        <input v-model="_education.region" class="input" type="text" placeholder="i.e. New Jersey">
                                    </div>
                                    <p v-if="nvregion" class="help is-danger">Invalid field.</p>
                                </div>

                                <div class="field">
                                    <legend class="label">Country</legend>
                                    <div class="control">
                                        <input v-model="_education.country" class="input" type="text" placeholder="i.e. United States">
                                    </div>
                                    <p v-if="nvcountry" class="help is-danger">Invalid field.</p>
                                </div>

                                <div class="field">
                                    <legend class="label">Year graduated</legend>
                                    <div class="control">
                                        <input v-model="_education.year_graduated" class="input" type="text" placeholder="i.e. 1999">
                                    </div>
                                    <p v-if="nvyear" class="help is-danger">Invalid field.</p>
                                </div>


                            </div>
                        </div>

                        <div class="buttons is-pulled-right mt-5">
                            <div class="button is-danger" @click="close()">Cancel</div>
                            <div class="button is-success" @click="submit()">Yes, continue!</div>
                        </div>
                        
                    </div>
                    <div class="is-clearfix"></div>
                </div>
            </div>
            <button @click="close" class="modal-close is-large" aria-label="close"></button>
        </div>
        <!-- end modal -->

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "MyAccountPanelEducation",
    computed: {
        ...mapGetters('education', ['education'])
    },
    data() {
        return {
            isUpdate: false,
            modal: 'modal',
            _education: {},

            // validations

            nvdegree: false,
            nvfield: false,
            nvschool: false,
            nvregion: false,
            nvcountry: false,
            nvyear: false,
        }
    },
    methods: {
        ...mapActions('education', ['addEducation', 'updateEducation', 'deleteEducation']),
        showAddModal() {
            this.turnOff()
            this._education = {}
            this._education.degree_type = 'bachelor'
            this.modal = 'modal is-active'
        },
        close() {
            this.modal = 'modal'
        },
        submit() {
            console.log('submit')
            if (this.validateForm()) {
                this.turnOff()
                if (this.isUpdate) {
                    this.updateEducation(this._education)
                }
                else {
                    this.addEducation(this._education)
                }
                this.modal = 'modal'
                this.isUpdate = false
            }
        },
        showUpdateModal(item) {
            this.turnOff()
            this.isUpdate = true
            this._education.id = item.id
            this._education.field_name = item.field_name
            this._education.degree_type = item.degree_type
            this._education.school_name = item.school_name
            this._education.region = item.region
            this._education.country = item.country
            this._education.year_graduated = item.year_graduated
            this.modal = 'modal is-active'
        },
        validateForm() {
            if (
                this._education.field_name &&
                this._education.degree_type &&
                this._education.school_name &&
                this._education.region &&
                this._education.country &&
                this._education.year_graduated
            ) {
                return true
            } else {
                this.turnOff()
                if (!this._education.field_name){this.nvfield=true}
                if (!this._education.degree_type){this.nvdegree=true}
                if (!this._education.school_name){this.nvschool=true}
                if (!this._education.region){this.nvregion=true}
                if (!this._education.country){this.nvcountry=true}
                if (!this._education.year_graduated){this.nvyear=true}
                return false
            }
        },
        turnOff() {
            this.nvdegree = false
            this.nvfield = false
            this.nvschool = false
            this.nvregion = false
            this.nvcountry = false
            this.nvyear = false
        }

    },

}
</script>

<style scoped>
.to-capital-first {
  text-transform: capitalize;
}
</style>
