// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwqX6sFhhbqozEQdrq_SFXAMfo6tSMpZo",
    authDomain: "projeto-mundo-invertido-bedb7.firebaseapp.com",
    projectId: "projeto-mundo-invertido-bedb7",
    storageBucket: "projeto-mundo-invertido-bedb7.appspot.com",
    messagingSenderId: "252535288137",
    appId: "1:252535288137:web:09daf56f911dfb03faaa98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app