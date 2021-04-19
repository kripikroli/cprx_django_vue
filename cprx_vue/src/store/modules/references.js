import axios from 'axios'

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