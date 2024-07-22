import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNGuYPNeIttUgw9EQSUjKcuHg-SP1JuCM",
  authDomain: "travelappexplore.firebaseapp.com",
  projectId: "travelappexplore",
  storageBucket: "travelappexplore.appspot.com",
  messagingSenderId: "178177443633",
  appId: "1:178177443633:web:afdb8fe6e511a9316d1210",
  measurementId: "G-9SC2XX79BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
