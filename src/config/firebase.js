// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfGpibZgjKfAD-b2BiYstoupofDorj2do",
  authDomain: "contact-hub-1e22b.firebaseapp.com",
  projectId: "contact-hub-1e22b",
  storageBucket: "contact-hub-1e22b.appspot.com",
  messagingSenderId: "517448932916",
  appId: "1:517448932916:web:b04e71df2a719edfbe7461"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);