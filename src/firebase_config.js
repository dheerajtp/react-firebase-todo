import firebase from "firebase";

var firebaseConfig = // your key

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
