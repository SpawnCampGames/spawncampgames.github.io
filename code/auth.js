const PASSWORD = "SpawnSecurity";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            const passwordInput = document.getElementById("password").value;
            if (passwordInput === PASSWORD) {
                localStorage.setItem("devAuth", "authenticated");
                window.location.href = "index.html";
            } else {
                alert("Incorrect password!");
            }
        });
    } else {
        if (localStorage.getItem("devAuth") !== "authenticated") {
            alert("Unauthorized! Redirecting to login.");
            window.location.href = "login.html"; // Redirect to login if not authenticated
        }
    }
});
