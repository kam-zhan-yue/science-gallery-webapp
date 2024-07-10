// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuN-ausG3RJSLl-FLH4Wyp1jtdFrRVoyI",
  authDomain: "science-gallery.firebaseapp.com",
  projectId: "science-gallery",
  storageBucket: "science-gallery.appspot.com",
  messagingSenderId: "105696149468",
  appId: "1:105696149468:web:2a58d349616ac1815b9919",
  measurementId: "G-C82WY48QGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);