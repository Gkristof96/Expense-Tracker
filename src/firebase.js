import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCprgW58feHp0-SRWhdJ-i67Ik-wys9B3o",
  authDomain: "expense-tracker-a6a87.firebaseapp.com",
  projectId: "expense-tracker-a6a87",
  storageBucket: "expense-tracker-a6a87.appspot.com",
  messagingSenderId: "1045194789984",
  appId: "1:1045194789984:web:0008bf86161b2082365f05",
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const firestore = getFirestore();
