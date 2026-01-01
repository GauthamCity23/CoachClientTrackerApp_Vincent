let storedUsername = "";
let storedPassword = "";

//Sign Up button
document.getElementById("signupBtn").addEventListener("click", function() {
    storedUsername = document.getElementById("signupUsername").value;
    storedPassword = document.getElementById("signupPassword").value;

    if (storedUsername && storedPassword) {
        document.getElementById("message").innerText = "Sign up successful! You can log in now.";
    } else {
        document.getElementById("message").innerText = "Please enter both username and password.";
    }

    //Clear inputs
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupPassword").value = "";
});

//Log In button
document.getElementById("loginBtn").addEventListener("click", function() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (username === storedUsername && password === storedPassword) {
        document.getElementById("message").innerText = "Login successful!";
    } else {
        document.getElementById("message").innerText = "Incorrect username or password";
    }

    //Clear inputs
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
});