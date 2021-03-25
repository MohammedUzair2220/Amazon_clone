// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDNXsehllz8JB6bC4wK2I9SfA5hkCTJyJM",
  authDomain: "clone-85ebc.firebaseapp.com",
  projectId: "clone-85ebc",
  storageBucket: "clone-85ebc.appspot.com",
  messagingSenderId: "661572539878",
  appId: "1:661572539878:web:ea24737177b031acd3f227",
  measurementId: "G-DSE3RX48Z4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
