// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import{Firestore,getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBadPQCH-P1fuyousYoeXhSgll1-GYft2k",
  authDomain: "examinationattendance.firebaseapp.com",
  projectId: "examinationattendance",
  storageBucket: "examinationattendance.firebasestorage.app",
  messagingSenderId: "106589897656",
  appId: "1:106589897656:web:02194e965f3941c445054d",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

