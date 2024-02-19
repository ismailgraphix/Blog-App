// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  
  authDomain: "blog-app-db5f2.firebaseapp.com",
  projectId: "blog-app-db5f2",
  storageBucket: "blog-app-db5f2.appspot.com",
  messagingSenderId: "407061785980",
  appId: "1:407061785980:web:7c4855d7ffba43017f48f9",
  measurementId: "G-XCJCQFVE57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
