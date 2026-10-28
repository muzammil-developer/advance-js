console.log("Javascript has been loaded");
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import {
    getFirestore,
    setDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

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

const auth = getAuth();
const db = getFirestore(app);
let isAuthenticating = false;

onAuthStateChanged(auth, (user) => {
    if (isAuthenticating) {
        return;
    }
    if (user) {
        if (window.location.pathname !== "/dashboard.html") {
            window.location.href = "dashboard.html";
        }
    } else {
        console.log("User is signed out");
        if (window.location.pathname === "/dashboard.html") {
            window.location.href = "login.html";
        }
    }
});

const login = (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
    });
};

const register = (e) => {
    e.preventDefault();
    isAuthenticating = true;

    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                username: "",
                phone: "",
                uid: user.uid,
            });

            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        })
        .finally(() => {
            isAuthenticating = false;
        });
};

const logout = () => {
    signOut(auth);
};

document.getElementById("login-form")?.addEventListener("submit", login);
document.getElementById("register-form")?.addEventListener("submit", register);
document.getElementById("logout")?.addEventListener("click", logout);
