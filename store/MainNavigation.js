import { make } from 'vuex-pathify'

const state = {
  height: 59,
  backgroundColor: '#10504F',
  textColor: '#fff',
  logo: '',
  links: ['womans', 'mens', 'accessories', 'sale!']
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
