// export const fuego = new Fuego({
// 	apiKey: 'AIzaSyBYA23RoUNQx_JRiE_QYbonur2bKne-e7U',
// 	authDomain: 'themicdrop-f0c9e.firebaseapp.com',
// 	databaseURL: 'https://themicdrop-f0c9e.firebaseio.com',
// 	projectId: 'themicdrop-f0c9e',
// 	storageBucket: 'themicdrop-f0c9e.appspot.com',
// 	messagingSenderId: '661922928136',
// 	appId: '1:661922928136:web:76ccc74cd6d4b26d85a3bd',
// 	measurementId: 'G-XVC4NNVMZ9',
// })
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = !firebase.apps.length
	? firebase
			.initializeApp({
				apiKey: 'AIzaSyBYA23RoUNQx_JRiE_QYbonur2bKne-e7U',
				authDomain: 'themicdrop-f0c9e.firebaseapp.com',
				databaseURL: 'https://themicdrop-f0c9e.firebaseio.com',
				projectId: 'themicdrop-f0c9e',
				storageBucket: 'themicdrop-f0c9e.appspot.com',
				messagingSenderId: '661922928136',
				appId: '1:661922928136:web:76ccc74cd6d4b26d85a3bd',
				measurementId: 'G-XVC4NNVMZ9',
			})
			.firestore()
	: firebase.app().firestore()

export const fuego = { db }
