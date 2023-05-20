import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKy7pQswW2PSrqctaUPr1mRREkSI6Nf0U",
  authDomain: "chatapp-1c69c.firebaseapp.com",
  projectId: "chatapp-1c69c",
  storageBucket: "chatapp-1c69c.appspot.com",
  messagingSenderId: "647913603450",
  appId: "1:647913603450:web:220c5498dd98b8b1c516c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
