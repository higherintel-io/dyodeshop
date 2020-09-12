import { make } from 'vuex-pathify'

const state = {
  headline: 'Signup and Stay Connected',
  bodyText: 'Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!',
  bodyTextColor: '#fff',
  backgroundColor: '#10504F',
  buttonBackgroundColor: '#10504F',
  buttonBorderColor: '#fff',
  buttonTextColor: '#fff',
  placeholderText: 'Your email address'

}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state)
}
const getters = {
  ...make.getters(state)
}

export default {
  namespaced: true, // add this if in module
  state,
  mutations,
  actions,
  getters
}
