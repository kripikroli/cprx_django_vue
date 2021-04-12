import axios from 'axios'

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