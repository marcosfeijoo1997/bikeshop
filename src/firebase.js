import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjzj0rs_y74LerTwHRIasu35LFCMtWY3s",
  authDomain: "bicicleteria-640bc.firebaseapp.com",
  databaseURL: "https://bicicleteria-640bc-default-rtdb.firebaseio.com",
  projectId: "bicicleteria-640bc",
  storageBucket: "bicicleteria-640bc.appspot.com",
  messagingSenderId: "692950615669",
  appId: "1:692950615669:web:72439d76d85d9b49ae1a3c",
  measurementId: "G-VCF4WC0KGK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
