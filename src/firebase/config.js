// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD965GipuyUxa2o-HVAidwhjLbnZSjvuz8",
  authDomain: "shopify-48437.firebaseapp.com",
  projectId: "shopify-48437",
  storageBucket: "shopify-48437.appspot.com",
  messagingSenderId: "849885219971",
  appId: "1:849885219971:web:0cd94c098385208781dfb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app