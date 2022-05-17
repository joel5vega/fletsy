// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd0o_XCNDizJ89Qv8_lFZ6aTsQEZ2Izno",
  authDomain: "fletsy-6fd50.firebaseapp.com",
  projectId: "fletsy-6fd50",
  storageBucket: "fletsy-6fd50.appspot.com",
  messagingSenderId: "613487389071",
  appId: "1:613487389071:web:7e2d722d2c057014fb83fa",
  measurementId: "G-C4P96H8RCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
