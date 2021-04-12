import axios from 'axios'

const state = {
    personal: {}
}

const getters = {
    personal: (state) => state.personal
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
    }

}

const mutations = {

    POPULATE_PERSONAL(state, data) {
        
        state.personal = {}
        if (data) {
            state.personal = data[0]
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