import { make } from 'vuex-pathify'

const state = {
  ctas: [
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599922795/dyode/Womens_Image.png',
      title: 'Womans',
      link: '/shop/womans'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599922806/dyode/Mens_Image.png',
      title: 'Mens',
      link: '/shop/mens'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599922806/dyode/Accessories_Image.png',
      title: 'Accessories',
      link: '/shop/accessories'
    }
  ],
  ctaLinkBackgroundColor: '#10504F',
  ctaFontColor: '#fff'

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
