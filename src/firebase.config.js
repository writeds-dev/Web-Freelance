// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDprbuUixW7XJWYepSmMpVrpN5sREe1ATQ",
  authDomain: "job-portal-f9094.firebaseapp.com",
  projectId: "job-portal-f9094",
  storageBucket: "job-portal-f9094.firebasestorage.app",
  messagingSenderId: "68666995585",
  appId: "1:68666995585:web:83826944e526ad7ba2ee80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}