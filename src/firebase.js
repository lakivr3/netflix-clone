// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6xrZftqXsV45CN6YCkxSbOr3Mp2yw91s",
  authDomain: "netflix-clone-react-b1334.firebaseapp.com",
  projectId: "netflix-clone-react-b1334",
  storageBucket: "netflix-clone-react-b1334.appspot.com",
  messagingSenderId: "848509319137",
  appId: "1:848509319137:web:4d4dc4341d4340020e84a0",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
