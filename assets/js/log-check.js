let email = localStorage.getItem("email");
let token = localStorage.getItem("token");
let password = localStorage.getItem("password");
let username = localStorage.getItem("session");
let welcomeText = document.querySelector("#welcomeText");

if ((email && token && password) || (username && username.trim() !== "")) {
    if (username && username.trim() !== "") {
        welcomeText.innerHTML = "Bienvenue " + username;
    } else {
        welcomeText.innerHTML = "Bienvenue " + email;
    }
} else {
    window.location.href = "../index.html";
}
