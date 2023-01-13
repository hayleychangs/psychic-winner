// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Z2IqgGFDK3v1vqVfMIc47ieqP0e056w",
  authDomain: "eureka-585c7.firebaseapp.com",
  projectId: "eureka-585c7",
  storageBucket: "eureka-585c7.appspot.com",
  messagingSenderId: "840382540591",
  appId: "1:840382540591:web:4e280ff5c1c6cde26ccfda",
  measurementId: "G-N8XVHRB7DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);