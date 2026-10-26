import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ_DD1KA-CVb3YZfk6P6Z4UJfFL8DOw8c",
    authDomain: "smit-batch-22-fa12f.firebaseapp.com",
    projectId: "smit-batch-22-fa12f",
    storageBucket: "smit-batch-22-fa12f.firebasestorage.app",
    messagingSenderId: "782447831991",
    appId: "1:782447831991:web:4eea8aeb64c318f5591632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)

const login = () => {
    alert();
};


const register = (e) => {
    e.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    console.log(email, password);
};

document.getElementById("login-form")?.addEventListener("submit", login);
document.getElementById("register-form")?.addEventListener("submit", register);
