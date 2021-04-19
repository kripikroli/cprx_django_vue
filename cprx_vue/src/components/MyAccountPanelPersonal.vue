<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title subtitle is-5">Personal details </p>
                </div>
                <div class="card-content">
                    <div class="content"> 
                        <div class="columns is-multiline">
                            <div class="column is-fullwidth">
                            <div class="field">
                                <label class="label">First name</label>
                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.first_name" class="input" type="text" placeholder="First name">
                                    <input v-else v-model="personal.first_name" class="input has-text-grey" type="text" placeholder="First name" readonly>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Last name</label>
                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.last_name" class="input" type="text" placeholder="Last name">
                                    <input v-else v-model="personal.last_name" class="input has-text-grey" type="text" placeholder="Last name" readonly>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Middle initial</label>
                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.middle_initial" class="input" type="text" placeholder="Middle initial">
                                    <input v-else v-model="personal.middle_initial" class="input has-text-grey" type="text" placeholder="Middle initial" readonly>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Birthdate</label>
                                <div class="control">
                                    <Datepicker v-if="update || isEmpty" class="input" v-model="_personal.date_of_birth"></Datepicker>
                                    <input v-else v-model="formatedDate" class="input has-text-grey" type="text" placeholder="Birthdate" readonly>
                                </div>
                            </div>
                                
                            <div class="field">
                                <label class="label">Phone number</label>
                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.phone_number" class="input" type="text" placeholder="Phone number">
                                    <input v-else v-model="formatedPhoneNumber" class="input has-text-grey" type="text" placeholder="Phone number" readonly>
                                </div>
                            </div>

                            <hr class="mt-6">
                           
                            <div class="field">
                                <label class="label">Address</label>
                                <div class="control mb-2">
                                    <input v-if="update || isEmpty" v-model="_personal.address_line_1" class="input" type="text" placeholder="123 Maple St.">
                                    <input v-else v-model="personal.address_line_1" class="input has-text-grey" type="text" placeholder="123 Maple St." readonly>
                                </div>

                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.address_line_2" class="input" type="text" placeholder="">
                                    <input v-else v-model="personal.address_line_2" class="input has-text-grey" type="text" placeholder="" readonly>
                                </div>

                            </div>

                           

                            <div class="field">
                                <label class="label">Township / City</label>
                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.city" class="input" type="text" placeholder="">
                                    <input v-else v-model="personal.city" class="input has-text-grey" type="text" placeholder="" readonly>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">State / Region</label>
                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.region" class="input" type="text" placeholder="">
                                    <input v-else v-model="personal.region" class="input has-text-grey" type="text" placeholder="" readonly>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Zip code</label>
                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.zip_code" class="input" type="text" placeholder="">
                                    <input v-else v-model="personal.zip_code" class="input has-text-grey" type="text" placeholder="" readonly>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Country</label>
                                <div class="control">
                                    <input v-if="update || isEmpty" v-model="_personal.country" class="input" type="text" placeholder="">
                                    <input v-else v-model="personal.country" class="input has-text-grey" type="text" placeholder="" readonly>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="buttons is-pulled-right">
                                <div v-if="update">
                                    <button @click="cancel" class="button is-danger">Cancel</button>
                                    <button @click="save" class="button is-success">Save changes</button>
                                </div>
                                <div v-else>
                                    <button v-if="isEmpty" @click="save" class="button is-success">Save</button>
                                    <button v-else @click="toggleUpdate" class="button is-success">Make changes</button>
                                </div>
                            </div>
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
                        <p class="subtitle has-text-centered pt-5">
                            Do you want to save this?
                        </p>
                        <div class="buttons is-pulled-right mt-5">
                            <div class="button is-danger" @click="close()">Cancel</div>
                            <div class="button is-success" @click="submit()">Yes, continue!</div>
                        </div>
                        
                    </div>
                    <div class="is-clearfix"></div>
                </div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
        <!-- end modal -->
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Datepicker from 'vue3-datepicker'
import parseISO from 'date-fns/parseISO'
import moment from 'moment'

export default {
    name: "MyAccountPanelPersonal",
    computed: {
        ...mapGetters('personal', ['personal', 'isEmpty']),
        formatedPhoneNumber() {
            return this.formatPhoneNumber(this.personal.phone_number)
        },
        formatedDate() {
            return moment(new Date(this.personal.date_of_birth)).format("yyyy-MM-DD")
        },
    },
    methods: {
        ...mapActions('personal', ['addPersonal', 'updatePersonal']),
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
        toggleUpdate() {
            this.update = !this.update
            this._personal.id = this.personal.id
            this._personal.first_name = this.personal.first_name
            this._personal.last_name = this.personal.last_name
            this._personal.middle_initial = this.personal.middle_initial
            this._personal.date_of_birth = parseISO(this.personal.date_of_birth)
            this._personal.phone_number = this.formatPhoneNumber(this.personal.phone_number)
            this._personal.address_line_1 = this.personal.address_line_1
            this._personal.address_line_2 = this.personal.address_line_2
            this._personal.city = this.personal.city
            this._personal.region = this.personal.region
            this._personal.zip_code = this.personal.zip_code
            this._personal.country = this.personal.country
        },
        cancel() {
            this.update = false
        },
        save() {
            this.modal = 'modal is-active'
        },
        close() {
            this.modal = 'modal'
            this.update = false
        },
        submit() {
            if (this.isEmpty) {
                this.addPersonal(this._personal)
                this.modal = 'modal'
            } 
            else {
                this.updatePersonal(this._personal)
                this.modal = 'modal'
                this.update = false
            }
        }
    },
    data() {
        return {
            update: false,
            empty: false,
            _personal: {},
            showModal: false,
            modal: 'modal'
        }
    },
    components: {
        Datepicker
    },
}
</script>

<!-- template for the modal component -->


<style scoped>
    .modal-content {
        max-width: 300px;
    }

</style>