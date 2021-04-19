import axios from 'axios'

const state = {
    skills: []
}

const getters = {
    skills: (state) => state.skills
}

const actions = {
    getSkills({commit}) {
        axios
            .get('api/v1/partner/skills/')
            .then(res => {
                commit('POPULATE_SKILLS', res.data)
            })
    }
}

const mutations = {
    POPULATE_SKILLS(state, list) {
        state.skills = []
        if (list) {
            for (let i = 0; i < list.length; i++) {
                state.skills.push(list[i])
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