// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8v01c4WLwTHyqTsWzV0aVDjfEuIaBKSE",
  authDomain: "netflixreact-a1b83.firebaseapp.com",
  projectId: "netflixreact-a1b83",
  storageBucket: "netflixreact-a1b83.appspot.com",
  messagingSenderId: "5120633634",
  appId: "1:5120633634:web:669fc1f64285085142937b",
  measurementId: "G-C8ZXTTT139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();