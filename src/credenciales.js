// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration. RECORDAR ESCONDER LAS CREDENCIALES ANTES DE SUBIR ESTO
const firebaseConfig = {
  apiKey: "AIzaSyCuBk7fknuIl0v7bpdmTvo2SoDUEBmBtro",
  authDomain: "soft-dental-42044.firebaseapp.com",
  projectId: "soft-dental-42044",
  storageBucket: "soft-dental-42044.appspot.com",
  messagingSenderId: "167392123924",
  appId: "1:167392123924:web:2eac1214bf2dfb5a8a5b01"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase