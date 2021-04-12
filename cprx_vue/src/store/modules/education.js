import axios from 'axios'

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