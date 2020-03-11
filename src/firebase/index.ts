import firebase from 'firebase/app'
import 'firebase/firestore'

const db = !firebase.apps.length
	? firebase.initializeApp().firestore()
	: firebase.app().firestore()

export const fuego = { db }
