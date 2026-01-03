let storedUnCurrent = "";
let storedPwCurrent = "";
let storedUsernames = [];
let storedPasswords = [];

//Sign Up button
document.getElementById("signupBtn").addEventListener("click", function() {
    storedUnCurrent = document.getElementById("signupUsername").value;
    storedPwCurrent = document.getElementById("signupPassword").value;

    if (storedUnCurrent && storedPwCurrent) {
        document.getElementById("message").innerText = "Sign up successful! You can log in now.";
    } else {
        document.getElementById("message").innerText = "Please enter both username and password.";
    }

    storedUsernames.push(document.getElementById("signupUsername").value);
    storedPasswords.push(document.getElementById("signupPassword").value);

    //Clear inputs
    document.getElementById("signupUsername").value = "";
    document.getElementById("signupPassword").value = "";

    console.log(storedUsernames)
    console.log(storedPasswords)
});

//Log In button
document.getElementById("loginBtn").addEventListener("click", function() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    for (let i = 0; i < storedUsernames.length; i++) {
        if (storedUsernames[i] == username) {
            if (storedPasswords[i] == password) {
                document.getElementById("message").innerText = "Login successful!";
                window.location.href = "../Dashboard/dashboard.html"
            } else {
                document.getElementById("message").innerText = "Incorrect username or password";
            }
        }
    }

    //Clear inputs
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
});