// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHiwkoC5HL2Y9RPo17pnAZcdFb9ipuqeU",
  authDomain: "myshopping-40fa8.firebaseapp.com",
  projectId: "myshopping-40fa8",
  storageBucket: "myshopping-40fa8.appspot.com",
  messagingSenderId: "650339939453",
  appId: "1:650339939453:web:50833cf99da2b5dfa3ad14",
  measurementId: "G-YVFHQSL2EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const analytics = getAnalytics(app);