// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Xa-z8Pl1hxEq9m6dsVsZEc-hfT6MKfA",
  authDomain: "streamify-946f9.firebaseapp.com",
  projectId: "streamify-946f9",
  storageBucket: "streamify-946f9.appspot.com",
  messagingSenderId: "1070985733254",
  appId: "1:1070985733254:web:bc8e427e2cde5ae36c5d07",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
