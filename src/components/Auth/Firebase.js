import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAcWW1pFAjJTdhQIppPa4Geq_RkuaLJ8_0",
  authDomain: "react-project-c8c0a.firebaseapp.com",
  projectId: "react-project-c8c0a",
  storageBucket: "react-project-c8c0a.appspot.com",
  messagingSenderId: "940895133426",
  appId: "1:940895133426:web:2401af45d6fe2ea57d3a6b",
  measurementId: "G-3X8JCPBHJY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();


export  {auth,provider,facebookAuthProvider};