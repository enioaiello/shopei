let username = document.querySelector("#username");
let registerButton = document.querySelector("#registerButton");

function registerAction(event) {
    event.preventDefault();

    if (username.value.trim() === "") {
        alert("Veuillez saisir un nom d'utilisateur.");
        return;
    }

    localStorage.setItem("session", username.value);
    window.location.href = "./home.html";
}

registerButton.addEventListener("click", registerAction);
