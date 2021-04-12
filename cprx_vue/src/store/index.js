import { createStore } from 'vuex'

import auth from './modules/auth'
import signup from './modules/signup'
import login from './modules/login'
import vars from './vars'


export default createStore({
  modules: {
    namespaced: true,

    auth,
    signup,
    login,
    vars
  }
})
