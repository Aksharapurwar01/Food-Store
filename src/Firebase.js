

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0GdfOozCY8_79t01-BlnpZBdTkxzYrJc",
  authDomain: "food-store-80b93.firebaseapp.com",
  projectId: "food-store-80b93",
  storageBucket: "food-store-80b93.appspot.com",
  messagingSenderId: "9631791786",
  appId: "1:9631791786:web:aa250b0f27330b34702ed3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };