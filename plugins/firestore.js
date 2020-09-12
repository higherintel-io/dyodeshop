import Vue from 'vue'
import { DB } from './firebase.js'

const firebasePlugin = {
  install () {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$DB) {
      Vue.prototype.$firestore = DB
    }
  }
}
Vue.use(firebasePlugin)

export default (ctx) => {
  const { app, store } = ctx
  app.$firestore = Vue.prototype.$firestore
  ctx.$firestore = Vue.prototype.$firestore
  if (store) {
    store.$firestore = Vue.prototype.$firestore
  }
}
