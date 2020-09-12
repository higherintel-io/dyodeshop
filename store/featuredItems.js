import { make } from 'vuex-pathify'

const state = () => ({
  title: 'New Arrivals',
  products: [
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599924299/dyode/Product_Image_1.webp',
      name: 'product title',
      shortDesc: 'Womans t-shirt',
      price: '19.99'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599924299/dyode/Product_Image_1.webp',
      name: 'product title',
      shortDesc: 'Womans t-shirt',
      price: '19.99'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599924299/dyode/Product_Image_1.webp',
      name: 'product title',
      shortDesc: 'Womans t-shirt',
      price: '19.99'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599924299/dyode/Product_Image_1.png',
      name: 'product title',
      shortDesc: 'Womans t-shirt',
      price: '19.99'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599924299/dyode/Product_Image_1.png',
      name: 'product title',
      shortDesc: 'Womans t-shirt',
      price: '19.99'
    },
    {
      image: 'https://res.cloudinary.com/higherintel/image/upload/v1599924299/dyode/Product_Image_1.png',
      name: 'product title',
      shortDesc: 'Womans t-shirt',
      price: '19.99'
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
