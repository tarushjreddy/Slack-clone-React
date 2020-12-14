// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7eEIUHh9dgeGzkUV6RHwSfpbs0P2qaT8",
  authDomain: "slack-clone-34aa8.firebaseapp.com",
  projectId: "slack-clone-34aa8",
  storageBucket: "slack-clone-34aa8.appspot.com",
  messagingSenderId: "712356182200",
  appId: "1:712356182200:web:b482535338e9878caadc4d",
  measurementId: "G-7YT3RL4NM7",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
