import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD144StPjSbJdyoq_2m1yx0gag8zNoNodQ",
    authDomain: "modul11-login.firebaseapp.com",
    projectId: "modul11-login",
    storageBucket: "modul11-login.appspot.com",
    messagingSenderId: "1048048232667",
    appId: "1:1048048232667:web:1d54dd7f1d294d3864c4fe",
    measurementId: "G-37DSKXGR66"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb