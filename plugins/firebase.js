import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBCqqK7VmbWzkt5gf9JcIi_cX3fP71GCY4',
  authDomain: 'dyodeshop.firebaseapp.com',
  databaseURL: 'https://dyodeshop.firebaseio.com',
  projectId: 'dyodeshop',
  storageBucket: 'dyodeshop.appspot.com',
  messagingSenderId: '595561490630',
  appId: '1:595561490630:web:55708e247d2de504a1cfc7',
  measurementId: 'G-N0NPET2YBM'
}

// eslint-disable-next-line no-unused-expressions
!firebase.apps.length ? firebase.initializeApp(config) : ''
export const DB = firebase.firestore()
export const auth = firebase.auth()
export default firebase
