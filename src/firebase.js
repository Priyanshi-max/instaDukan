import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcgxZHo9NVsmBlpM-SZ4VvfgHn-a70Rcs",
  authDomain: "clone-42327.firebaseapp.com",
  projectId: "clone-42327",
  storageBucket: "clone-42327.appspot.com",
  messagingSenderId: "391504564788",
  appId: "1:391504564788:web:cba6520ed639d5aff1b061",
  measurementId: "G-15RRYG7LPS"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }