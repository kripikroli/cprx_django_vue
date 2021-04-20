<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title">Certifications</p>
                </div>
                <div class="card-content">
                    <div class="content">
                        <div v-for="item in certifications" v-bind:key="item.id" class="mb-3">
                            
                            <article class="message is-success">
                                <div class="message-body">
                                    <div class="columns is-multiline">
                                        <div class="column is-6">
                                            <div>
                                            <p><strong>{{ item.cert_name }} | {{ item.cert_code }}</strong>
                                            <br>Valid until {{ formatDate(item.expiration_date) }}
                                            <br>{{ item.region }}, {{ item.country }}
                                            </p></div>
                                        </div>

                                        <div class="column is-6">
                                            <p class="is-pulled-right">
                                                <button @click="deleteCertifications(item.id)" class="button is-danger is-outlined mr-3"><span class="icon is-small"><i class="far fa-trash-alt"></i></span></button>

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
                                <Datepicker v-model="_certification.expiration_date" class="input"></Datepicker>
                            </div>
                        </div>

                        
                        <div class="field">
                            <legend class="label">Certification name</legend>
                            <div class="control">
                                <input v-model="_certification.cert_name" class="input" type="text" placeholder="i.e. NCLEX">
                            </div>
                        </div>
                

                
                        <div class="field">
                            <legend class="label">Certification number</legend>
                            <div class="control">
                                <input v-model="_certification.cert_code" class="input" type="text" placeholder="i.e. NJ11090222345">
                            </div>
                        </div>
                    
                        <div class="field">
                            <legend class="label">State</legend>
                            <div class="control">
                                <input v-model="_certification.region" class="input" type="text" placeholder="i.e. New Jersey">
                            </div>
                        </div>
                
                        <div class="field">
                            <legend class="label">Country</legend>
                            <div class="control">
                                <input v-model="_certification.country" class="input" type="text" placeholder="i.e. United States">
                            </div>
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
    name: "MyAccountPanelCertifications",
    computed: {
        ...mapGetters('certifications', ['certifications'])
    },
    methods: {
        ...mapActions('certifications', ['addCertifications', 'updateCertifications', 'deleteCertifications']),
        formatDate(str) {
            return moment(new Date(str)).format("LL");
        },
        showAddModal() {
            this._certification = {}
            this.modal = 'modal is-active'
        },
        showUpdateModal(item) {
            this._certification = {}
            this._certification = {...item}
            this._certification.expiration_date = parseISO(item.expiration_date)
            this.modal = 'modal is-active'
            this.update = true
        },
        close() {
            this.modal = 'modal'
        },
        submit() {
            if (this.update) {
                this.updateCertifications(this._certification)
            }
            else {
                this.addCertifications(this._certification)
            }
            this.modal = 'modal'
            this.update = false
        }
    },
    data() {
        return {
            modal: 'modal',
            _certification: {},
            update: false
        }
    },
    components: {
        Datepicker
    }
}
</script>