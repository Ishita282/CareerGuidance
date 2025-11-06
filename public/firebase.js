// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfIUrLx94L5KhOzlV1tosp7XoHXqOHW14",
    authDomain: "career-guidance-21a8a.firebaseapp.com",
    projectId: "career-guidance-21a8a",
    storageBucket: "career-guidance-21a8a.firebasestorage.app",
    messagingSenderId: "965892782309",
    appId: "1:965892782309:web:5cb016f72b033b0458bc0c",
    measurementId: "G-Z22K1Q1Q83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
