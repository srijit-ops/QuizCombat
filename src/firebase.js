// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC4Th-opEHoVVdnCCtuXoGRPP2wY5Ss3w",
  authDomain: "quiz-app-9f553.firebaseapp.com",
  projectId: "quiz-app-9f553",
  storageBucket: "quiz-app-9f553.appspot.com",
  messagingSenderId: "540387472128",
  appId: "1:540387472128:web:d1d4efa0fe6acb097279e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();