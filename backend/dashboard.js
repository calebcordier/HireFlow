import { auth, signOut } from "./firebase.js";

document.getElementById("logout").addEventListener("click", async () => {
    try {
        await signOut(auth);
        alert("Logged out successfully!");
        window.location.href = "login.html";
    } catch (error) {
        console.error("Logout failed:", error);
    }
});
