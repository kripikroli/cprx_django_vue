<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title subtitle is-5">Licenses</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <div v-for="item in licenses" v-bind:key="item.id" class="mb-3">
                            
                            <article class="message is-success">
                                <div class="message-body">
                                    <div class="columns is-multiline">
                                        <div class="column is-6">
                                            <div>
                                            <p><strong>{{ item.license_name }} | {{ item.license_code }}</strong>
                                            <br>Valid until {{ formatDate(item.expiration_date) }}
                                            <br>{{ item.region }}, {{ item.country }}
                                            </p></div>
                                            <div>
                                                <div class="field">
                                                    <label class="checkbox">
                                                        <input class="mr-3" v-model="item.is_compact" type="checkbox" true-value="true" false-value="false" onclick="return false">Compact license
                                                    </label>
                                                    <br>
                                                    <label class="checkbox">
                                                        <input class="mr-3" v-model="item.is_active" type="checkbox" true-value="true" false-value="false" onclick="return false">Active license
                                                    </label>
                                                </div>

                                            
                                            </div>
                                        </div>

                                        <div class="column is-6">
                                            <p class="is-pulled-right">
                                                <button @click="deleteLicenses(item.id)" class="button is-danger is-outlined mr-3"><span class="icon is-small"><i class="far fa-trash-alt"></i></span></button>

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

                        <div class="field">
                            <label class="label">Expiration date</label>
                            <div class="control">
                                <Datepicker v-model="_licenses.expiration_date" class="input"></Datepicker>
                            </div>
                            <p v-if="nvexpire" class="help is-danger">Invalid field.</p>
                        </div>

                        
                        <div class="field">
                            <legend class="label">License name</legend>
                            <div class="control">
                                <input v-model="_licenses.license_name" class="input" type="text" placeholder="i.e. NCLEX">
                            </div>
                            <p v-if="nvname" class="help is-danger">Invalid field.</p>
                        </div>
                

                
                        <div class="field">
                            <legend class="label">License number</legend>
                            <div class="control">
                                <input v-model="_licenses.license_code" class="input" type="text" placeholder="i.e. NJ11090222345">
                            </div>
                            <p v-if="nvcode" class="help is-danger">Invalid field.</p>
                        </div>
                    
                        <div class="field">
                            <label class="checkbox  mt-3">
                                <input v-model="_licenses.is_compact" type="checkbox" true-value="true" false-value="false"> This is a compact license.
                            </label>
                        </div>

                
                        <div class="field">
                            <legend class="label">State</legend>
                            <div class="control">
                                <input v-model="_licenses.region" class="input" type="text" placeholder="i.e. New Jersey">
                            </div>
                            <p v-if="nvregion" class="help is-danger">Invalid field.</p>
                        </div>
                    

                
                        <div class="field">
                            <legend class="label">Country</legend>
                            <div class="control">
                                <input v-model="_licenses.country" class="input" type="text" placeholder="i.e. United States">
                            </div>
                            <p v-if="nvcountry" class="help is-danger">Invalid field.</p>
                        </div>
                    

                        <div class="buttons is-pulled-right mt-5">
                            <div class="button is-danger" @click="close()">Cancel</div>
                            <div class="button is-success" @click="submit()">Yes, continue!</div>
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
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import Datepicker from 'vue3-datepicker'
import parseISO from 'date-fns/parseISO'

export default {
    name: "MyAccountPanelLicenses",
    computed: {
        ...mapGetters('licenses', ['licenses'])
    },
    methods: {
        ...mapActions('licenses', ['addLicenses', 'updateLicenses', 'deleteLicenses']),
        formatDate(str) {
            return moment(new Date(str)).format("LL");
        },
        showAddModal() {
            this.turnOff()
            this._licenses = {}
            this.modal = 'modal is-active'
        },
        showUpdateModal(item) {
            this.turnOff()
            this._licenses = {}
            this._licenses = {...item}
            this._licenses.expiration_date = parseISO(item.expiration_date)
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
                    this.updateLicenses(this._licenses)
                }
                else {
                    this.addLicenses(this._licenses)
                }
                this.update = false
                this.modal = 'modal'
            }
        },
        validateForm() {
            if (
                this._licenses.expiration_date &&
                this._licenses.license_name &&
                this._licenses.license_code &&
                this._licenses.region &&
                this._licenses.country
            ) {
                return true
            } else {
                if (!this._licenses.expiration_date){this.nvexpire=true}
                if (!this._licenses.license_name){this.nvname=true}
                if (!this._licenses.license_code){this.nvcode=true}
                if (!this._licenses.region){this.nvregion=true}
                if (!this._licenses.country){this.nvcountry=true}
                return false
            }
        },
        turnOff() {
            this.nvexpire = false
            this.nvname = false
            this.nvcode = false
            this.nvregion = false
            this.nvcountry = false
        }
    },
    data() {
        return {
            modal: 'modal',
            update: false,
            _licenses: {
                expiration_date: new Date()
            },

            // validations

            nvexpire: false,
            nvname: false,
            nvcode: false,
            nvregion: false,
            nvcountry: false,
        }
    },
    components: {
        Datepicker
    }
}
</script>