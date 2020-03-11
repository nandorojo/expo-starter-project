import firebase from 'firebase/app'
import 'firebase/firestore'

const db = !firebase.apps.length
	? firebase.initializeApp({
	  // config here...
	}).firestore()
	: firebase.app().firestore()

export const fuego = { db }
