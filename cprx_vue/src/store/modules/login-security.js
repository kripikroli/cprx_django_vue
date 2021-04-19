import axios from 'axios'
import { toast } from 'bulma-toast'

const state = {

    loginSecurityAttrs: [],
    isEmpty: false,
}

const getters = {
    loginSecurityAttrs: (state) => state.loginSecurityAttrs,
    isEmpty: (state) => state.isEmpty,
}

const actions = {
    getLSA({commit}) {
        axios
            .get("/api/v1/partner/login-security/")
            .then(res => {
                commit('POPULATE_LOGIN_SECURITY_ATTRS', res.data)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    },
    addLSA({commit, dispatch}, data) {
        axios
            .post("/api/v1/partner/login-security/", data)
            .then(res => {

                toast({
                    message: 'Saved successfully!',
                    type: 'is-success',
                    dismissible: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: 'top-right',
                    animate: { in: 'fadeIn', out: 'fadeOut' }
                })

                dispatch('getLSA')
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    },
    updateLSA({commit, dispatch}, data) {
        axios
            .put(`/api/v1/partner/login-security/${data.id}/`, data)
            .then(res => {
                dispatch('getLSA')

                toast({
                    message: 'Saved changes successfully!',
                    type: 'is-success',
                    dismissible: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: 'top-right',
                    animate: { in: 'fadeIn', out: 'fadeOut' }
                })

            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    }

}

const mutations = {
    POPULATE_LOGIN_SECURITY_ATTRS(state, list) {
        state.loginSecurityAttrs = []
        
        if (list.length) {
            state.loginSecurityAttrs = list[0]
            state.isEmpty = false
        }
        else {
            state.isEmpty = true
        }
    },
} 

export default {
    namespaced: true,

    state,
    getters,
    actions,
    mutations
}