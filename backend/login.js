
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from "./firebase.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Sign in with email and password
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect after login
    } catch (error) {
        console.error("Login error:", error.message);
        alert(error.message);
    }
});

// Google Login
document.getElementById("googleLogin").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        alert(`Welcome, ${result.user.displayName}!`);
        window.location.href = "dashboard.html";
    } catch (error) {
        console.error("Google Login Error:", error.message);
        alert(error.message);
    }
});
