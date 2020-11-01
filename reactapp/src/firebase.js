import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC65DbQOwRNKKXZiaB-UmYn8EaTcQAcyj8",
  authDomain: "augenblikk-5c32d.firebaseapp.com",
  databaseURL: "https://augenblikk-5c32d.firebaseio.com",
  projectId: "augenblikk-5c32d",
  storageBucket: "augenblikk-5c32d.appspot.com",
  messagingSenderId: "775727346698",
  appId: "1:775727346698:web:e735e019ef572e4aa89bf3",
  measurementId: "G-0H6463Q941",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleProvider);
};
