import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let config = {
  apiKey: "AIzaSyDlBe5eOyjjUIjMKo4F3aDACYQNU91kTsg",
  authDomain: "mahakarya-e29e0.firebaseapp.com",
  projectId: "mahakarya-e29e0",
  storageBucket: "mahakarya-e29e0.appspot.com",
  messagingSenderId: "127216348748",
  appId: "1:127216348748:web:cdd908a55709e33ee78ee9"
};
firebase.initializeApp(config);
export default firebase.firestore();
