import axios from 'axios'
import { toast } from 'bulma-toast'

const state = {
    education: []
}

const getters = {
    education: (state) => state.education
}

const actions = {

    getEducation({commit}) {
        axios
            .get('/api/v1/partner/education/')
            .then(res => {
                commit('POPULATE_EDUCATION', res.data)
            })
            .catch(err => {
                console.log(JSON.stringify(err))
            })
    },
    addEducation({commit, dispatch}, data) {
        axios
            .post('/api/v1/partner/education/', data)
            .then(res => {
                dispatch('getEducation')

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
            .catch(res => {
                console.log(JSON.stringify(err))
            })
    },
    updateEducation({commit, dispatch}, data) {
        axios
            .put(`/api/v1/partner/education/${data.id}/`, data)
            .then(res => {
                dispatch('getEducation')

                toast({
                    message: 'Updated successfully!',
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
    deleteEducation({commit, dispatch}, id) {
        axios
            .delete(`/api/v1/partner/education/${id}/`)
            .then(res => {

                dispatch('getEducation')

                toast({
                    message: 'Education removed!',
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
    POPULATE_EDUCATION(state, list) {

        state.education = []
        if (list) {
            for (let i = 0; i < list.length; i++) {
                state.education.push(list[i])
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