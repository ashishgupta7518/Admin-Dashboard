// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrcE6PBFoZBBRRpPjM2SN7u0OqFnxGaHY",
  authDomain: "auth-9900b.firebaseapp.com",
  projectId: "auth-9900b",
  storageBucket: "auth-9900b.firebasestorage.app",
  messagingSenderId: "141484071795",
  appId: "1:141484071795:web:dcbda49459030a4748c306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);