// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR3HvGaohF8mQ3gvXP9cgX4vIoUj6N7o0",
  authDomain: "netflixgpt-61d42.firebaseapp.com",
  projectId: "netflixgpt-61d42",
  storageBucket: "netflixgpt-61d42.appspot.com",
  messagingSenderId: "290679445908",
  appId: "1:290679445908:web:927177d2979795e0945781",
  measurementId: "G-806SL69MP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
