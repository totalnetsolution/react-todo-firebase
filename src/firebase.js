import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUX0PXbvO_4bg6RkOg5ygXei4iChnqiwU",
  authDomain: "react-todo-app-bbc90.firebaseapp.com",
  projectId: "react-todo-app-bbc90",
  storageBucket: "react-todo-app-bbc90.appspot.com",
  messagingSenderId: "37381666277",
  appId: "1:37381666277:web:064d0a5421fef3089bab0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
