// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkvOi_UoxNRtBKc-a6TxoRacR6XTXsGVo",
  authDomain: "alien-iterator-404714.firebaseapp.com",
  projectId: "alien-iterator-404714",
  storageBucket: "alien-iterator-404714.appspot.com",
  messagingSenderId: "258171629964",
  appId: "1:258171629964:web:3f0ce2ccdf01361c2fa6a9",
  measurementId: "G-TB678ZPNTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

