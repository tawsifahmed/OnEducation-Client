// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX9CCS9YUQalKqIuVXWw4gRwncv_JLxCs",
    authDomain: "education-site-demo.firebaseapp.com",
    projectId: "education-site-demo",
    storageBucket: "education-site-demo.appspot.com",
    messagingSenderId: "1050441586057",
    appId: "1:1050441586057:web:e980120effb013dcc17d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;