import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import messages from './modules/messages'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
        users,
        messages
    }
  })

export default store