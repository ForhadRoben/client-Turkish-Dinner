// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMcZ6ZU2T1mJQ1UP48epwIQIff3vUdbi0",
    authDomain: "turkish-dinner.firebaseapp.com",
    projectId: "turkish-dinner",
    storageBucket: "turkish-dinner.appspot.com",
    messagingSenderId: "528816897495",
    appId: "1:528816897495:web:fda1694fdb2e87c3f6df92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;