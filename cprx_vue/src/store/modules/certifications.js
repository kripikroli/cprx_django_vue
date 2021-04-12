import axios from 'axios'

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