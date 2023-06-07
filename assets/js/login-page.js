let email = localStorage.getItem("email");
let token = localStorage.getItem("token");
let password = localStorage.getItem("password");
let compteUniverselError = document.querySelector("#compteUniverselError");

if (email == null || token == null || password == null) {
    console.error("L'utilisateur n'est pas connecté ou les données du compte sont corrompues.");
} else if (email === "root@admin-services.com" && token === "8535d6zd46db565z465d4a57" && password === "toor") {
    console.error("Compte universel non compatible avec shopei");
    compteUniverselError.style.display = "inline-block";
} else {
    window.location.href = "../../views/home.html";
}