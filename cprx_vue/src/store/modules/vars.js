const state = {
    sections: {
        security: 'is-active',
        personal: '',
        education: '',
        licenses: '',
        certifications: '',
        skills: '',
        references: '',
        notifications: '',
        messages: ''
    },
    panels: {
        security: true,
        personal: false,
        education: false,
        licenses: false,
        certifications: false,
        skills: false,
        references: false,
        notifications: false,
        messages: false
    }
}

const getters = {
    sections: (state) => state.sections,
    panels: (state) => state.panels
}

const actions = {

    init({commit}) {
        commit('INIT_SECTIONS')
        commit('INIT_PANELS')
    },

    toggle({commit}, _section) {
        commit('TOGGLE_SECTION', _section)
        commit('TOGGLE_PANEL', _section)
    }

}

const mutations = {

    INIT_SECTIONS(state) {
        for (let section in state.sections) {
            state.sections[section] = ''
        }
        state.sections.security = 'is-active'
    },

    INIT_PANELS(state) {
        for (let panel in state.panels) {
            state.panels[panel] = false
        }
        state.panels.security = true
    },

    TOGGLE_SECTION(state, _section) {
        for (let section in state.sections) {
            state.sections[section] = ''
          }
          state.sections[_section] = 'is-active'
    },

    TOGGLE_PANEL(state, _section) {
        for (let panel in state.panels) {
            state.panels[panel] = false
          }
          state.panels[_section] = true
    },


}

export default {
    namespaced: true,

    state,
    getters,
    actions,
    mutations
}