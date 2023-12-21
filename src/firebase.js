import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWHkSJ3RjvJr9axmsGJukKwo4S7d7nyc0",
    authDomain: "react-portfolio-855fb.firebaseapp.com",
    projectId: "react-portfolio-855fb",
    storageBucket: "react-portfolio-855fb.appspot.com",
    messagingSenderId: "803735140648",
    appId: "1:803735140648:web:41e2ab34a17c9f26eeb81d",
    measurementId: "G-0H4QRH2VZ9"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();