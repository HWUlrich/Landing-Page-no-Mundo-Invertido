  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCkFepzoPynCOusKhqhKgzByEVUkjqiwLE",
    authDomain: "mundo-invertido-dd-bfdc4.firebaseapp.com",
    projectId: "mundo-invertido-dd-bfdc4",
    storageBucket: "mundo-invertido-dd-bfdc4.appspot.com",
    messagingSenderId: "416424150302",
    appId: "1:416424150302:web:edba6ec93aa2bff9f9350f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app