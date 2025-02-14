document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("User Email:", email);
    console.log("Password:", password);
    alert("Login successful!");
});

// Google Sign-In Callback
function onGoogleSignIn(response) {
    console.log("Google User:", response);
    alert("Google Sign-In Successful!");
}
