import { make } from 'vuex-pathify'

const state = {
  instagramUsername: 'qdhenry',
  headline: 'Follow us on instagram!',
  posts: [
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599928499/dyode/Social_1.webp'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599928499/dyode/Social_2.webp'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599928499/dyode/Social_3.webp'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599928499/dyode/Social_4.webp'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599928499/dyode/Social_5.webp'
    }
  ]

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
