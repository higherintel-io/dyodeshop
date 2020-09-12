import { make } from 'vuex-pathify'

const state = () => ({
  title: 'Title Goes Here',
  tagline: 'Tagline goes here',
  textColor: '#fff',
  backgroundImage: 'https://res.cloudinary.com/higherintel/image/upload/v1599926993/dyode/Hero_Image_2.webp',
  buttonText: 'Shop now!',
  buttonBackgroundColor: '#10504F',
  buttonTextColor: '#fff'

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
