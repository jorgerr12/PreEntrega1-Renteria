// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0xt8WJOnxrfie4lBX_22KfyVn5R2_zhg",
  authDomain: "coderhouse-reactapp.firebaseapp.com",
  projectId: "coderhouse-reactapp",
  storageBucket: "coderhouse-reactapp.appspot.com",
  messagingSenderId: "219670816953",
  appId: "1:219670816953:web:19745dd2aca1827403d368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)