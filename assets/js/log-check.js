let email = localStorage.getItem("email");
let token = localStorage.getItem("token");
let password = localStorage.getItem("password");
let welcomeText = document.querySelector("#welcomeText");

if (email == null || token == null || password == null) {
    window.location.href = "../index.html";
} else {
    welcomeText.innerHTML = "Bienvenue " + email;
}