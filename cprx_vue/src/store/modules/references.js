import axios from 'axios'
import { toast } from 'bulma-toast'

const state = {
    references: []
}

const getters = {
    references: (state) => state.references
}

const actions = {
    getReferences({commit}) {
        axios
            .get('api/v1/partner/references/')
            .then(res => {
                commit('POPULATE_REFERENCES', res.data)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    },
    addReferences({commit, dispatch}, data) {
        axios
            .post('/api/v1/partner/references/', data)
            .then(res => {
                dispatch('getReferences')

                toast({
                    message: 'Added references successfully!',
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
    updateReferences({commit, dispatch}, data) {
        axios
            .put(`/api/v1/partner/references/${data.id}/`, data)
            .then(res => {
                dispatch('getReferences')

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
    deleteReferences({commit, dispatch}, id) {
        axios
            .delete(`/api/v1/partner/references/${id}/`)
            .then(res => {
                dispatch('getReferences')

                toast({
                    message: 'Reference removed!',
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
    POPULATE_REFERENCES(state, list) {
        state.references = []
        if (list) {
            for (let i = 0; i < list.length; i++) {
                state.references.push(list[i])
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