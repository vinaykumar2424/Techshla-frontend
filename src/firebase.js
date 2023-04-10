// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDw13YL-04pMAqxULD0MgOczIHFpcGrwC4",
  authDomain: "contest-c59f5.firebaseapp.com",
  projectId: "contest-c59f5",
  storageBucket: "contest-c59f5.appspot.com",
  messagingSenderId: "834453191624",
  appId: "1:834453191624:web:a69142d5c289402a3c1efd",
  measurementId: "G-KVS6KTGC2W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();