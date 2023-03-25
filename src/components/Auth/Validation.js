// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcWW1pFAjJTdhQIppPa4Geq_RkuaLJ8_0",
  authDomain: "react-project-c8c0a.firebaseapp.com",
  projectId: "react-project-c8c0a",
  storageBucket: "react-project-c8c0a.appspot.com",
  messagingSenderId: "940895133426",
  appId: "1:940895133426:web:2401af45d6fe2ea57d3a6b",
  measurementId: "G-3X8JCPBHJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);