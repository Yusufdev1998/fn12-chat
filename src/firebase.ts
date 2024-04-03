// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM9UCt8up9t0rw2hbFNnUwA81xPZS6Iko",
  authDomain: "fn12-d8329.firebaseapp.com",
  projectId: "fn12-d8329",
  storageBucket: "fn12-d8329.appspot.com",
  messagingSenderId: "595967650236",
  appId: "1:595967650236:web:1ef21b3aa04e3188cee3b9",
  databaseURL:
    "https://fn12-d8329-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const db = getFirestore(app);

export const realDB = getDatabase(app);

export const googleProvider = new GoogleAuthProvider();
