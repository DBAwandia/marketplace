import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXX0yYj0-wVaM3q6iwxspWIdMdpf9x04Q",
  authDomain: "phonepalace-a646c.firebaseapp.com",
  projectId: "phonepalace-a646c",
  storageBucket: "phonepalace-a646c.appspot.com",
  messagingSenderId: "980163876718",
  appId: "1:980163876718:web:9d96c22e3d3de9b555d37f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)