import { make } from 'vuex-pathify'

const state = () => ({
  title: 'Title Goes Here',
  tagline: 'Tagline goes here',
  textColor: '#fff',
  backgroundImage: 'https://res.cloudinary.com/higherintel/image/upload/v1599867755/dyode/Hero_Image_1.png',
  buttonText: 'Shop now!',
  buttonBackgroundColor: '#000',
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
