import { make } from 'vuex-pathify'

const state = {
  height: 59,
  text: 'Free shipping on all orders over $75',
  textColor: '#fff',
  backgroundColor: '#000'

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
