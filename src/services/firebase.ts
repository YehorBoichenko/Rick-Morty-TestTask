
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0oUarc62uEciOeu0zF4CAy_2HGBtGIOk",
  authDomain: "rick-morty-app-8cc0f.firebaseapp.com",
  projectId: "rick-morty-app-8cc0f",
  storageBucket: "rick-morty-app-8cc0f.appspot.com",
  messagingSenderId: "691479796137",
  appId: "1:691479796137:web:ab9166e001566c7ade0cb8",
  measurementId: "G-S462S668TJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();