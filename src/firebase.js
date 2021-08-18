import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGLJkflQf-AH6cArJUqGmKoEDUbMY0eIs",
  authDomain: "twitter-clone-2af54.firebaseapp.com",
  projectId: "twitter-clone-2af54",
  storageBucket: "twitter-clone-2af54.appspot.com",
  messagingSenderId: "923718454717",
  appId: "1:923718454717:web:d39734dcfe7769659a16d4",
  measurementId: "G-36D8VHLCTC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
