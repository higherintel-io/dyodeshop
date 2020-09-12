import { make } from 'vuex-pathify'

const state = () => ({
  bodyTextColor: '#fff',
  backgroundColor: '#000',
  customerServiceLinks: ['accessibility', 'contact-us', 'return-policy', 'faq', 'gift-certificates', 'wishlist'],
  companyLinks: ['about-us', 'careers', 'press', 'affiliates'],
  socialMedia: [
    {
      name: 'facebook',
      icon: 'https://res.cloudinary.com/higherintel/image/upload/v1599937716/dyode/facebook'
    },
    {
      name: 'instagram',
      icon: 'https://res.cloudinary.com/higherintel/image/upload/v1599937716/dyode/instagram'
    },
    {
      name: 'twitter',
      icon: 'https://res.cloudinary.com/higherintel/image/upload/v1599937716/dyode/twitter'
    }
  ]

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
