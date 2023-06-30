import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAZVJRCQD40g1mqYYCSwEaz2RQCeOaNmzU",
  authDomain: "chatify-8e1a9.firebaseapp.com",
  projectId: "chatify-8e1a9",
  storageBucket: "chatify-8e1a9.appspot.com",
  messagingSenderId: "891657761784",
  appId: "1:891657761784:web:f1b172cf7b668ef8281c0d",
  measurementId: "G-BBRKHWENR6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
