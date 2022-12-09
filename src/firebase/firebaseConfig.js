// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoxjNwIqU7t8PqFjZL64XRmtOgIo6MKYg",
  authDomain: "job-assessment-dcb3a.firebaseapp.com",
  projectId: "job-assessment-dcb3a",
  storageBucket: "job-assessment-dcb3a.appspot.com",
  messagingSenderId: "409925165780",
  appId: "1:409925165780:web:e786d963099f58a407d141",
  measurementId: "G-HNFNCPB2X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)

export default app;