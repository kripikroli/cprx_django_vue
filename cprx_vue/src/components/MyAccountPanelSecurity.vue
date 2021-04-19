<template>
    <div class="components">
        <div class="section">
            <div class="card">
                <div class="card-header">
                <p class="card-header-title subtitle is-5">Login and security</p>
                </div>
                <div class="card-content">

                    <!--- empty || update -->
                    <div v-if="isEmpty || update">
                            <div class="columns is-multiline">
                                <div class="column is-fullwidth">
                                    <div class="field">
                                        <label class="label">Primary email</label>
                                        <div class="control">
                                            <input v-model="_loginSecurityAttrs.email" class="input" type="email" placeholder="Email">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Alternative email</label>
                                        <div class="control">
                                            <input v-model="_loginSecurityAttrs.alt_email" class="input" type="email" placeholder="Alternative email(optional)">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Phone number</label>
                                        <div class="control">
                                            <input v-model="_loginSecurityAttrs.phone_number" class="input" type="tel" placeholder="Phone number">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="checkbox  mt-3">
                                            <input v-model="_loginSecurityAttrs.is_email_verified" type="checkbox" true-value="true" false-value="false"> I would like <a href="#">Primo Healthcare Services</a> to verify my account.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        
                        <hr>
                        <h6 class="subtitle">In case you forgot your username or password.</h6>
                      
                            <div class="columns is-multiline">
                                <div class="column is-fullwidth">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="_loginSecurityAttrs.secret_question_1" class="input" type="tel" placeholder="Secret Question One">
                                        </div>
                                        <div class="control has-icons-left has-icons-right mt-1">
                                            <input v-model="_loginSecurityAttrs.secret_answer_1" autocomplete="" class="input" type="password" placeholder="Answer">
                                            <span class="icon is-small is-left"><i class="fas fa-eye-slash"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="columns is-multiline">
                                <div class="column is-fullwidth">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="_loginSecurityAttrs.secret_question_2" class="input" type="tel" placeholder="Secret Question Two">
                                        </div>
                                        <div class="control has-icons-left has-icons-right mt-1">
                                            <input v-model="_loginSecurityAttrs.secret_answer_2" autocomplete="" class="input" type="password" placeholder="Answer">
                                            <span class="icon is-small is-left"><i class="fas fa-eye-slash"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        <div class="column">
                            <div v-if="isEmpty" class="buttons is-pulled-right">
                                    <button @click="save" class="button is-success">Save</button>
                            </div>
                            <div v-else class="buttons is-pulled-right">
                                    <button @click="update = false" class="button is-danger">Cancel</button>
                                    <button @click="save" class="button is-success">Save changes</button>
                            </div>
                            <div class="is-clearfix"></div>
                        </div>
                        
                    </div>

                    <!--- not empty -->
                    <div v-else>
                        <div class="columns is-multiline">
                            <div class="column is-fullwidth">
                                <div class="field">
                                    <label class="label">Primary email</label>
                                    <div class="control">
                                        <input v-model="loginSecurityAttrs.email" class="input has-text-grey" type="email" placeholder="Email" readonly>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Alternative email</label>
                                    <div class="control">
                                        <input v-model="loginSecurityAttrs.alt_email" class="input has-text-grey" type="email" placeholder="Alternative email(optional)" readonly>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="label">Phone number</label>
                                    <div class="control">
                                        <input v-model="loginSecurityAttrs.phone_number" class="input has-text-grey" type="tel" placeholder="Phone number" readonly>
                                    </div>
                                </div>

                                <div class="field">
                                    <label class="checkbox  mt-3  has-text-grey">
                                        <input v-model="loginSecurityAttrs.is_email_verified" type="checkbox" true-value="true" false-value="false" onclick="return false;"> I would like <a href="#">Primo Healthcare Services</a> to verify my account.
                                    </label>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <h6 class="subtitle">In case you forgot your username or password.</h6>
                            <div class="columns is-multiline">
                                <div class="column is-fullwidth">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="loginSecurityAttrs.secret_question_1" class="input has-text-grey" type="text" placeholder="Secret Question One" readonly>
                                        </div>
                                        <div class="control has-icons-left has-icons-right mt-1">
                                            <input v-model="loginSecurityAttrs.secret_answer_1" autocomplete="" class="input has-text-grey" type="password" placeholder="Answer" readonly>
                                            <span class="icon is-small is-left"><i class="fas fa-eye-slash"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="columns is-multiline">
                                <div class="column is-fullwidth">
                                    <div class="field">
                                        <div class="control">
                                            <input v-model="loginSecurityAttrs.secret_question_2" class="input has-text-grey" type="text" placeholder="Secret Question Two" readonly>
                                        </div>
                                        <div class="control has-icons-left has-icons-right mt-1">
                                            <input v-model="loginSecurityAttrs.secret_answer_2" autocomplete="" class="input has-text-grey" type="password" placeholder="Answer" readonly>
                                            <span class="icon is-small is-left"><i class="fas fa-eye-slash"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div class="column">
                            <div class="buttons is-pulled-right">
                                    <button @click="makeChanges" class="button is-success">Make changes</button>
                            </div>
                            <div class="is-clearfix"></div>
                        </div>
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
                        <div class="buttons is-pulled-right mt-5" v-if="update">
                            <div class="button is-danger" @click="close()">Cancel</div>
                            <div class="button is-success" @click="submit()">Yes, continue!</div>
                        </div>
                        <div class="buttons is-pulled-right mt-5" v-else>
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
import { mapGetters, actions, mapActions } from 'vuex'

export default {
    name: "MyAccountPanelSecurity",
    computed: {
        ...mapGetters('login_security', ['loginSecurityAttrs', 'isEmpty'])
    },
    methods: {
        ...mapActions('login_security',['getLSA', 'addLSA', 'updateLSA']),
        save() {
            this.modal = 'modal is-active'
        },
        makeChanges() {
            this._loginSecurityAttrs.id = this.loginSecurityAttrs.id
            this._loginSecurityAttrs.email = this.loginSecurityAttrs.email
            this._loginSecurityAttrs.alt_email = this.loginSecurityAttrs.alt_email
            this._loginSecurityAttrs.phone_number = this.loginSecurityAttrs.phone_number
            this._loginSecurityAttrs.is_email_verified = this.loginSecurityAttrs.is_email_verified
            this._loginSecurityAttrs.secret_question_1 = this.loginSecurityAttrs.secret_question_1
            this._loginSecurityAttrs.secret_answer_1 = this.loginSecurityAttrs.secret_answer_1
            this._loginSecurityAttrs.secret_question_2 = this.loginSecurityAttrs.secret_question_2
            this._loginSecurityAttrs.secret_answer_2 = this.loginSecurityAttrs.secret_answer_2
            this.update = true
        },
        close() {
            this.update = false
            this.modal = 'modal'
        },
        submit() {
            if (this.update) {
                this.updateLSA(this._loginSecurityAttrs)
                this.update = false
                this.modal = 'modal'
            }
            else {
                this.addLSA(this._loginSecurityAttrs)
                this.update = false
                this.modal = 'modal'
            }
        }
    },
    mounted() {
        this.getLSA()
    },
    data() {
        return {
            update: false,
            verifyMe: false,
            _loginSecurityAttrs: {
                is_email_verified:  false
            },
            modal: 'modal'
        }
    },
}
</script>

<style scoped>
    .modal-content {
        max-width: 300px;
    }

</style>