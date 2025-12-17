const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Empty check
    if (username === "" || password === "") {
        message.textContent = "All fields are required ❌";
        message.style.color = "red";
        return;
    }

    // Dummy credentials
    if (username === "admin" && password === "12345") {
        message.textContent = "Logged in successfully ✅";
        message.style.color = "green";
    } else {
        message.textContent = "Invalid username or password ❌";
        message.style.color = "red";
    }
});
