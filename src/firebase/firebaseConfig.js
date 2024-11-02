// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPmngXjQd3azJL_WFuh-hIoLANHa8NDOw",
  authDomain: "babel-bcc7f.firebaseapp.com",
  projectId: "babel-bcc7f",
  storageBucket: "babel-bcc7f.firebasestorage.app",
  messagingSenderId: "638431473824",
  appId: "1:638431473824:web:cc6824c6e4c2cb88d9d9c5",
  measurementId: "G-8YYCW63JDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);