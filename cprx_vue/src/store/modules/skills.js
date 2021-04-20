import axios from 'axios'
import { toast } from 'bulma-toast'

const state = {
    skills: [],
    isEmpty: false
}

const getters = {
    skills: (state) => state.skills,
    isEmpty: (state) => state.isEmpty
}

const actions = {
    getSkills({commit}) {
        axios
            .get('api/v1/partner/skills/')
            .then(res => {
                commit('POPULATE_SKILLS', res.data)
            })
    },
    addSkills({commit, dispatch}, data) {
        axios
            .post('/api/v1/partner/skills/', data)
            .then(res => {
                dispatch('getSkills')

                toast({
                    message: 'Added skill successfully!',
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
    updateSkills({commit, dispatch}, data) {
        axios
            .put(`/api/v1/partner/skills/${data.id}/`, data)
            .then(res => {
                dispatch('getSkills')

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
    deleteSkills({commit, dispatch}, id) {
        axios
            .delete(`/api/v1/partner/skills/${id}/`)
            .then(res => {
                dispatch('getSkills')

                toast({
                    message: 'Skill removed!',
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
    POPULATE_SKILLS(state, list) {
        state.skills = []
        if (list.length) {
            for (let i = 0; i < list.length; i++) {
                state.skills.push(list[i])
            }
            state.isEmpty = false
        }
        else {
            state.isEmpty = true
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