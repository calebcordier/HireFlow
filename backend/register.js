import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "./firebase.js";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    try {
        // Register user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
            firstName,
            lastName,
            email,
            phone
        });

        alert("Registration successful!");
        window.location.href = "login.html";
    } catch (error) {
        console.error("Error registering:", error.message);
        alert(error.message);
    }
});
