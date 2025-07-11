// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Web app`s Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBriEfznrEqWmRiB7_QHsq705gU_zsGBfk",
  authDomain: "web-app-d81b4.firebaseapp.com",
  projectId: "web-app-d81b4",
  storageBucket: "web-app-d81b4.appspot.com",
  messagingSenderId: "694280345943",
  appId: "1:694280345943:web:5cab1c436ac2f8d32f8612",
  // ... others Firebase parameters can be added if it neccessary 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
