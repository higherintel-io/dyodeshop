import { make } from 'vuex-pathify'

const state = () => ({
  clientId: 'q4cczkdcz0m0e6xlig3uxc7p16xaymr',
  authToken: 'knslddtn5m3z4r0n5n80n46gct3gclw',
  storeHash: 'v0rmgrcilf'

})

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
