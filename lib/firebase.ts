// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPVeZWgqA3Hu1dK7Hfx8v3BcFxw4Xu_AI",
  authDomain: "my-place-review-app.firebaseapp.com",
  projectId: "my-place-review-app",
  storageBucket: "my-place-review-app.appspot.com",
  messagingSenderId: "831815062993",
  appId: "1:831815062993:web:f0e3bb63c46d67a1987cf0",
  measurementId: "G-1XTEM7DZ0K",
};

// Ініціалізуємо додаток
const app = initializeApp(firebaseConfig);

// Експортуємо Firebase Auth для використання в додатку
export const auth = getAuth(app);
export default app;
