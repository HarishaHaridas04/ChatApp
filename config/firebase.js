/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjhwfQZ5AFukXpgxD2lnFs01UtplCcjUk",
  authDomain: "myjobapp-351bd.firebaseapp.com",
  projectId: "myjobapp-351bd",
  storageBucket: "myjobapp-351bd.appspot.com",
  messagingSenderId: "345411356259",
  appId: "1:345411356259:web:f0d5c2d027822837a79a56"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
import { getFirestore } from 'firebase/firestore';
