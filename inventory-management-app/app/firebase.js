// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEjmlt8iDvCYA5TQjvaPLIukolvg2ABFs",
  authDomain: "pantryapp-38c06.firebaseapp.com",
  projectId: "pantryapp-38c06",
  storageBucket: "pantryapp-38c06.appspot.com",
  messagingSenderId: "249050775368",
  appId: "1:249050775368:web:1182a0c9834a1c5008fd7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore}