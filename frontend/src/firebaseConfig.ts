import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {getAnalytics} from 'firebase/analytics';

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

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app); // Initialize Firebase Analytics

export { auth, firestore, analytics };
