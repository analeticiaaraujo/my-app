// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFfmIMegWqeVzvQghyxYpJ0ifKv10Mw_k",
  authDomain: "pweb-3eb43.firebaseapp.com",
  projectId: "pweb-3eb43",
  storageBucket: "pweb-3eb43.firebasestorage.app",
  messagingSenderId: "328187501699",
  appId: "1:328187501699:web:28f73c5aa60b4c190d0fb6",
  measurementId: "G-PNM2WS53MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);