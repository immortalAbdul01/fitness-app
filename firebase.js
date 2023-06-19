// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMz9s1bXRq8GuVaQs8_GWPH8FgbHg8FYc",
    authDomain: "fitness-7f59f.firebaseapp.com",
    projectId: "fitness-7f59f",
    storageBucket: "fitness-7f59f.appspot.com",
    messagingSenderId: "749398533981",
    appId: "1:749398533981:web:193eb51922adad94572ab4"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
