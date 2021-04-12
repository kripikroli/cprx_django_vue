import { createStore } from 'vuex'

import auth from './modules/auth'
import signup from './modules/signup'
import login from './modules/login'
import vars from './modules/vars'
import personal from './modules/personal'
import education from './modules/education'
import licenses from './modules/licenses'
import certifications from './modules/certifications'


export default createStore({
  modules: {
    namespaced: true,

    auth,
    signup,
    login,
    vars,
    personal,
    education,
    licenses,
    certifications
  }
})
