<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">References</p>
                </div>
                <div class="card-content">
                    <div class="content">

                        <div v-for="ref in references" v-bind:key="ref.id" class="mb-3">
                            
                            <article class="message is-success">
                                <div class="message-body">
                                    <div class="columns is-multiline">
                                        <div class="column is-8">
                                            <p>
                                            <strong>{{ ref.name }} | {{ ref.position }}</strong>
                                            <br>{{ ref.email }}
                                            <br>{{ formatPhoneNumber(ref.phone_number) }}
                                            <br>{{ formatDate(ref.start_date) }} - {{ formatDate(ref.end_date) }}
                                            <br>{{ ref.facility_name }}
                                            </p>
                                        </div>

                                        <div class="column is-4">
                                            <p class="is-pulled-right">
                                                <button @click="deleteReferences(ref.id)" class="button is-danger is-outlined mr-3"><span class="icon is-small"><i class="far fa-trash-alt"></i></span></button>

                                                <button @click="showUpdateModal(ref)" class="button is-success is-outlined"><span class="icon is-small"><i class="far fa-edit"></i></span></button>
                                            
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
                            <label class="label">Start date</label>
                            <div class="control">
                                <Datepicker v-model="_references.start_date" class="input"></Datepicker>
                            </div>
                            <p v-if="nvstart" class="help is-danger">Invalid field.</p>
                        </div>

                        <div class="field">
                            <label class="label">End date</label>
                            <div class="control">
                                <Datepicker v-model="_references.end_date" class="input"></Datepicker>
                            </div>
                            <p v-if="nvend" class="help is-danger">Invalid field.</p>
                        </div>

                        <div class="field">
                            <legend class="label">Name</legend>
                            <div class="control">
                                <input v-model="_references.name" class="input" type="text" placeholder="">
                            </div>
                            <p v-if="nvname" class="help is-danger">Invalid field.</p>
                        </div>

                        <div class="field">
                            <legend class="label">Position</legend>
                            <div class="control">
                                <input v-model="_references.position" class="input" type="text" placeholder="">
                            </div>
                            <p v-if="nvpos" class="help is-danger">Invalid field.</p>
                        </div>

                        <div class="field">
                            <legend class="label">Email</legend>
                            <div class="control">
                                <input v-model="_references.email" class="input" type="email" placeholder="">
                            </div>
                            <p v-if="nvemail" class="help is-danger">Invalid field.</p>
                        </div>

                        <div class="field">
                            <legend class="label">Phone number</legend>
                            <div class="control">
                                <input v-model="_references.phone_number" class="input" type="tel" placeholder="">
                            </div>
                            <p v-if="nvphone" class="help is-danger">Invalid field.</p>
                        </div>

                        <div class="field">
                            <legend class="label">Facility name</legend>
                            <div class="control">
                                <input v-model="_references.facility_name" class="input" type="text" placeholder="">
                            </div>
                            <p v-if="nvfac" class="help is-danger">Invalid field.</p>
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
    name: "MyAccountPanelReferences",
    computed: {
        ...mapGetters('references', ['references'])
    },
    methods: {
        ...mapActions('references', ['addReferences', 'updateReferences', 'deleteReferences']),
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
        showAddModal() {
            this.turnOff()
            this._references.start_date = new Date()
            this._references.end_date = new Date()
            this.modal = 'modal is-active'
        },
        showUpdateModal(ref) {
            this.turnOff()
            this._references = {...ref}
            this._references.start_date = parseISO(ref.start_date)
            this._references.end_date = parseISO(ref.end_date)
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
                    this.updateReferences(this._references)
                }
                else {
                    this.addReferences(this._references)
                }
                this.modal = 'modal'
                this.update = false
            }
        },
        validateForm() {
            if (
                this._references.start_date &&
                this._references.end_date &&
                this._references.name &&
                this._references.position &&
                this._references.email &&
                this._references.phone_number &&
                this._references.facility_name
            ) {
                return true
            } else {
                this.turnOff()
                if (!this._references.start_date) {this.nvstart=true}
                if (!this._references.end_date) {this.nvend=true}
                if (!this._references.name) {this.nvname=true}
                if (!this._references.position) {this.nvpos=true}
                if (!this._references.email) {this.nvemail=true}
                if (!this._references.phone_number) {this.nvphone=true}
                if (!this._references.facility_name) {this.nvfac=true}
                return false
            }
        },
        turnOff() {
            this.nvstart = false
            this.nvend = false
            this.nvname = false
            this.nvpos = false
            this.nvemail = false
            this.nvphone = false
            this.nvfac = false
        }
    }, 
    data() {
        return {
            _references: {},
            modal: 'modal',
            update: false,

            // validations

            nvstart: false,
            nvend: false,
            nvname: false,
            nvpos: false,
            nvemail: false,
            nvphone: false,
            nvfac: false
        }
    },
    components: {
        Datepicker
    }
}
</script>