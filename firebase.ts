// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBLd6xwyWALhOgZpakypLtJ0fiPfzHHSi0',
	authDomain: 'julian-miranda.firebaseapp.com',
	projectId: 'julian-miranda',
	storageBucket: 'julian-miranda.appspot.com',
	messagingSenderId: '1031082457913',
	appId: '1:1031082457913:web:33166bf309420abe7446e8',
	measurementId: 'G-GEVB6S2RTR'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
