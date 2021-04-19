import axios from 'axios'
import { toast } from 'bulma-toast'

const state = {
    personal: {},
    isEmpty: false
}

const getters = {
    personal: (state) => state.personal,
    isEmpty: (state) => state.isEmpty
}

const actions = {

    getPersonal({commit}) {
        axios
            .get('/api/v1/partner/personal/')
            .then(res => {
                commit('POPULATE_PERSONAL', res.data)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    },
    addPersonal({commit, dispatch}, data) {
        axios
            .post('/api/v1/partner/personal/', data)
            .then(res => {
                dispatch('getPersonal')
                commit('UPDATE_IS_EMPTY')

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
    updatePersonal({commit, dispatch}, data) {
        axios
            .put(`/api/v1/partner/personal/${data.id}/`, data)
            .then(res => {

                dispatch('getPersonal')

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

    POPULATE_PERSONAL(state, data) {
        
        state.personal = {}
        if (data.length) {
            state.personal = data[0]
        }
        else {
            state.isEmpty = true
        }
    },
    UPDATE_IS_EMPTY(state) {
        state.isEmpty = false
    }

}

export default {
    namespaced: true,

    state,
    getters,
    actions,
    mutations
}