// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_P4BxPEDU1uF2hEdp-RVoJTy2zkKAjcg",
  authDomain: "fruit-marketplace-43e9d.firebaseapp.com",
  projectId: "fruit-marketplace-43e9d",
  storageBucket: "fruit-marketplace-43e9d.appspot.com",
  messagingSenderId: "730467879007",
  appId: "1:730467879007:web:ac516df116f2387781f3ea",
  measurementId: "G-WXM42K6W2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
