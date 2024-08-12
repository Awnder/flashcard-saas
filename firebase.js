// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIqGFMtOpVjKxak3SO4jy2kXHh7W7RJws",
  authDomain: "flashcard-saas-2ab7f.firebaseapp.com",
  projectId: "flashcard-saas-2ab7f",
  storageBucket: "flashcard-saas-2ab7f.appspot.com",
  messagingSenderId: "82370995763",
  appId: "1:82370995763:web:a1d72902eccf7a8c9f2546",
  measurementId: "G-HCPFPN0T36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);