import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyArARFQe9OlVd4F0oyjY-EPUUO38sesUac",
    authDomain: "rock-paper-scissor-171cc.firebaseapp.com",
    databaseURL: "https://rock-paper-scissor-171cc-default-rtdb.firebaseio.com",
    projectId: "rock-paper-scissor-171cc",
    storageBucket: "rock-paper-scissor-171cc.appspot.com",
    messagingSenderId: "155558235436",
    appId: "1:155558235436:web:d132d18e80a1c77a1d3089",
    measurementId: "G-B1ZGGF0DZT"
  };

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);