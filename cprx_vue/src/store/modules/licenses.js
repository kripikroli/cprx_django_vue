import axios from 'axios'
import { toast } from 'bulma-toast'

const state = {
    licenses: []
}

const getters = {
    licenses: (state) => state.licenses
}

const actions = {
    getLicenses({commit}) {
        axios
            .get('/api/v1/partner/licenses/')
            .then(res => {
                commit('POPULATE_LICENSES', res.data)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    },
    addLicenses({commit, dispatch}, data) {
        axios
            .post('/api/v1/partner/licenses/', data)
            .then(res => {
                dispatch('getLicenses')

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
    updateLicenses({commit, dispatch}, data) {
        axios
            .put(`/api/v1/partner/licenses/${data.id}/`, data)
            .then(res => {
                dispatch('getLicenses')

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
    deleteLicenses({commit, dispatch}, id) {
        axios
            .delete(`/api/v1/partner/licenses/${id}`)
            .then(res => {
                dispatch('getLicenses')

                toast({
                    message: 'License removed!',
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
    POPULATE_LICENSES(state, list) {
        state.licenses = []
        if (list) {
            for (let i = 0; i < list.length; i++) {
                state.licenses.push(list[i])
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