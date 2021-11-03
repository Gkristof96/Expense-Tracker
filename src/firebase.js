import firebase from "firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnjGWzwk83ya_WUbJIUiMBFiv67ejdRt0",
  authDomain: "expense-app-8f5c1.firebaseapp.com",
  databaseURL: "https://expense-app-8f5c1-default-rtdb.firebaseio.com",
  projectId: "expense-app-8f5c1",
  storageBucket: "expense-app-8f5c1.appspot.com",
  messagingSenderId: "169596397213",
  appId: "1:169596397213:web:0f06d9fe08ad85930a5674",
  measurementId: "G-XESCYGRLRX",
};

const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
