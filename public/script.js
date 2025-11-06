 // Log function for tracking actions
function logAction(action) {
    console.log(`[LOG] ${action}`);
}

// Example: Student login
function studentLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            logAction("Student logged in successfully");
            alert("Login successful");
            window.location.href = "career-selection.html";
        })
        .catch(err => {
            logAction(`Login failed: ${err.message}`);
            alert(err.message);
        });
}

// Example: Student Sign Up
function studentSignUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            logAction("Student signed up successfully");
            alert("Sign Up successful");
            window.location.href = "career-selection.html";
        })
        .catch(err => {
            logAction(`Sign Up failed: ${err.message}`);
            alert(err.message);
        });
}
