// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhp3KwtaPKHcEQ62k-gIvAdiD9sk2158g",
  authDomain: "hireflow1.firebaseapp.com",
  projectId: "hireflow1",
  storageBucket: "hireflow1.firebasestorage.app",
  messagingSenderId: "728774327183",
  appId: "1:728774327183:web:23ee38272c7dd8966c69fa",
  measurementId: "G-PDYSEE0LZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, collection, addDoc, doc, setDoc, getDoc };