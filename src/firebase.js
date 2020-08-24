import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyC8vC2YwnMONaoNfabDNm84ateKqOoce0I',
	authDomain: 'freeproject-280613.firebaseapp.com',
	databaseURL: 'https://freeproject-280613.firebaseio.com',
	projectId: 'freeproject-280613',
	storageBucket: 'freeproject-280613.appspot.com',
	messagingSenderId: '88670659990',
	appId: '1:88670659990:web:adb00d51725388464269b7'
});

const db = firebaseApp.firestore();

export { db };
