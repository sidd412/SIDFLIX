import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDd_UsYvQ0FfzNhw5BAc3csZkHNjOj-R28",
  authDomain: "sidflix-b3ed8.firebaseapp.com",
  projectId: "sidflix-b3ed8",
  storageBucket: "sidflix-b3ed8.appspot.com",
  messagingSenderId: "570627834742",
  appId: "1:570627834742:web:7000fb5cef98a96b6cf057"
  };
  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  export {auth, app} ;