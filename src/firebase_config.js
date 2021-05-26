import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBGKe0TMhln77vewnKmnOBFei1DlHhzt78",
  authDomain: "mytodoapp-76394.firebaseapp.com",
  projectId: "mytodoapp-76394",
  storageBucket: "mytodoapp-76394.appspot.com",
  messagingSenderId: "355581741181",
  appId: "1:355581741181:web:1e98b533b9cc6463140914",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
