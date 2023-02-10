import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwku5hwsqfRkkzOWZkssCycA68kxZ2Xlc",
  authDomain: "kk-chatgpt-clone.firebaseapp.com",
  projectId: "kk-chatgpt-clone",
  storageBucket: "kk-chatgpt-clone.appspot.com",
  messagingSenderId: "858757897371",
  appId: "1:858757897371:web:0e9608d96d7335ebe7fa3e",
};

// Initialize Firebase
// singleton pattern

const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
