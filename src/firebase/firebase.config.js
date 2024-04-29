// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUcJnEBaBeZS9CMJXNNWQ8rBienC4y_pw",
  authDomain: "sales24-eae75.firebaseapp.com",
  projectId: "sales24-eae75",
  storageBucket: "sales24-eae75.appspot.com",
  messagingSenderId: "707178775338",
  appId: "1:707178775338:web:652d15218bbbb324d15453",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
