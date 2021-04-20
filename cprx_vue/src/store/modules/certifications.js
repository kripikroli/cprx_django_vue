import axios from 'axios'
import { toast } from 'bulma-toast'

const state = {
    certifications: []
}

const getters = {
    certifications: (state) => state.certifications
}

const actions = {
    getCertifications({commit}) {
        axios
            .get('/api/v1/partner/certifications/')
            .then(res => {
                commit('POPULATE_CERTIFICATIONS', res.data)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    },
    addCertifications({commit, dispatch}, data) {
        axios
            .post('/api/v1/partner/certifications/', data)
            .then(res => {
                dispatch('getCertifications')

                toast({
                    message: 'Saved successfully!',
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
    },
    updateCertifications({commit, dispatch}, data) {
        axios
            .put(`/api/v1/partner/certifications/${data.id}/`, data)
            .then(res => {
                dispatch('getCertifications')

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
    },
    deleteCertifications({commit, dispatch}, id) {
        axios
            .delete(`/api/v1/partner/certifications/${id}/`)
            .then(res => {
                dispatch('getCertifications')

                toast({
                    message: 'Certification removed!',
                    type: 'is-danger',
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
    POPULATE_CERTIFICATIONS(state, list) {

        state.certifications = []
        if (list) {
            for (let i = 0; i < list.length; i++) {
                state.certifications.push(list[i])
            }
        }
    }
}

export default {
    namespaced: true,

    state,
    getters,
    actions,
    mutations
}