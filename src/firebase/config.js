// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore"
import { getAuth , GoogleAuthProvider} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxorEEhhugejaNHhyrs1vwTm5EWjzgp4",
  authDomain: "hypesel-store.firebaseapp.com",
  projectId: "hypesel-store",
  storageBucket: "hypesel-store.appspot.com",
  messagingSenderId: "890261799543",
  appId: "1:890261799543:web:e15780d59ac616bc723c72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
 export const auth = getAuth(app)
 export const provider= new GoogleAuthProvider()