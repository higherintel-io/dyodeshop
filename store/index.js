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
function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
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
      // eslint-disable-next-line require-await
      async getDesignSettings ({ dispatch, commit, state }) {
        const self = this
        const settingsData = Object.entries(state).flatMap((i) => {
          const newObject = {}
          newObject.name = i[0]
          newObject.data = i[1]
          return newObject
        })

        try {
          await settingsData.forEach(async (setting) => {
          // remove user and isAdmin as these dont need to be stored in database
            if (setting.name === 'user' || setting.name === 'isAdmin') { return }

            // get all the users design settings from database and add them to the store
            const collection = await self.$firestore
              .collection('stores')
              .doc(this.$config.baseDomain)
              .collection(setting.name)
              .doc(setting.name)
            const componentSettings = await collection.get()
            const allComponentSettings = componentSettings.data()
            if (allComponentSettings) {
              const storeName = allComponentSettings.name
              const dispatchString = `${storeName}`
              for (const [key, value] of Object.entries(allComponentSettings.data)) {
                const moduleToDispatch = `${dispatchString}/set${capitalizeFirstLetter(key)}`
                dispatch(moduleToDispatch, value)
              }
            } else {
              return false
            }
          })
        } catch (error) {
          throw new Error('An Error Ocurred: ', error)
        }
      },
      async saveDesignSettings ({ dispatch, state }) {
        const self = this
        // get all of the vuex modules from the state object and pass them into firebase
        const settingsData = Object.entries(state).flatMap((i) => {
          const newObject = {}
          newObject.name = i[0]
          newObject.data = i[1]
          return newObject
        })
        await settingsData.forEach(async (setting) => {
          // remove user and isAdmin as these dont need to be stored in database
          if (setting.name === 'user' || setting.name === 'isAdmin') { return }
          await self.$firestore
            .collection('stores')
            .doc(this.$config.baseDomain)
            .collection(setting.name)
            .doc(setting.name)
            .set({
              ...setting,
              owner: this.get('user').uid,
              updatedAt: new Date()
            })
            .then((ref) => {
              return ref
            })
            .catch((error) => {
              throw new Error('An Error Occured: ', error)
            })
        })
        await dispatch('getDesignSettings')
      },

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
      },
      // eslint-disable-next-line require-await
      async nuxtServerInit ({ commit, dispatch, state }) {

        // await dispatch('getDesignSettings')
      }
    }
  })
}
Vue.use(Vuex)
export default createStore
