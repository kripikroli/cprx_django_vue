import { createStore } from 'vuex'

import auth from './modules/auth'
import signup from './modules/signup'
import login from './modules/login'
import vars from './modules/vars'
import login_security from './modules/login-security'
import personal from './modules/personal'
import education from './modules/education'
import licenses from './modules/licenses'
import certifications from './modules/certifications'
import skills from './modules/skills'
import references from './modules/references'

export default createStore({
  modules: {
    namespaced: true,

    auth,
    signup,
    login,
    vars,
    login_security,
    personal,
    education,
    licenses,
    certifications,
    skills,
    references
  }
})
