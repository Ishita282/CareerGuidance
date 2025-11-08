import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfIUrLx94L5KhOzlV1tosp7XoHXqOHW14",
  authDomain: "career-guidance-21a8a.firebaseapp.com",
  databaseURL: "https://career-guidance-21a8a-default-rtdb.firebaseio.com",
  projectId: "career-guidance-21a8a",
  storageBucket: "career-guidance-21a8a.firebasestorage.app",
  messagingSenderId: "965892782309",
  appId: "1:965892782309:web:7d1d48df19b592ae58bc0c",
  measurementId: "G-4B1BLWPQMZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
