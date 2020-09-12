import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import topAnnoucementBar from './topAnnoucementBar'
import MainNavigation from './MainNavigation'
import heroBanner from './heroBanner'
import heroBannerBottom from './heroBannerBottom'
import callToActionItems from './callToActionItems'
import instagramFeed from './instagramFeed'
import featuredItems from './featuredItems'
import footerNewsletter from './footerNewsletter'
import footerMain from './footerMain'
import bcSettings from './bcSettings'
import { auth } from '~/plugins/firebase.js'

export const strict = false

const createStore = () => {
  return new Vuex.Store({
    plugins: [pathify.plugin],
    state: () => ({
      user: null,
      isAdmin: true
    }),
    modules: {
      bcSettings,
      instagramFeed,
      featuredItems,
      topAnnoucementBar,
      MainNavigation,
      heroBanner,
      heroBannerBottom,
      callToActionItems,
      footerNewsletter,
      footerMain
    },
    mutations: {
      SET_USER (state, user) {
        state.user = user
      }
    },
    actions: {
      async logout ({ commit }) {
        await auth.signOut()
        commit('SET_USER', null)
      },
      async login ({ commit }, { email, password }) {
        try {
          await auth.createUserWithEmailAndPassword(email, password)
          const user = auth.currentUser
          await user.sendEmailVerification()
          commit('SET_USER', user.user)
        } catch (error) {
          if (error.code === 'auth/email-already-in-use') {
            try {
              const user = await auth.signInWithEmailAndPassword(email, password)
              commit('SET_USER', user.user)
            } catch (error) {
              throw new Error('An Error Ocurred: ', error)
            }
          } else {
            throw new Error('An Error Ocurred: ', error)
          }
        }
      }
    }
  })
}
Vue.use(Vuex)
export default createStore
