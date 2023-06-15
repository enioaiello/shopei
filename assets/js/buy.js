let antoine = document.querySelector("#antoineDownloadButton");

function buyAntoine() {
    let software = "Antoine";
    let choice = confirm("Acheter " + software + " ?");
    if (choice) {
        localStorage.setItem(software, true);
        window.open("https://github.com/enioaiello/antoine/releases/latest/download/antoine.dmg", "_blank");
        window.location.href = "./thank.html";
    }
}

antoine.addEventListener("click", buyAntoine);

let otoMaintenance = document.querySelector("#otoMaintenanceDownloadButton");

function buyOtoMaintenance() {
    let software = "Oto-Maintenance";
    let choice = confirm("Acheter " + software + " ?");
    if (choice) {
        localStorage.setItem(software, true);
        window.open("https://github.com/enioaiello/Oto-Maintenance/releases/latest/download/oto-maintenance.bat", "_blank");
        window.location.href = "./thank.html";
    }
}

otoMaintenance.addEventListener("click", buyOtoMaintenance);

let linOtoMaintenance = document.querySelector("#linOtoMaintenanceDownloadButton");

function buyLinOtoMaintenance() {
    let software = "linOto-Maintenance";
    let choice = confirm("Acheter " + software + " ?");
    if (choice) {
        localStorage.setItem(software, true);
        window.open("blob:https://github.com/b8e3989b-eae1-4338-942b-044340e31886", "_blank");
        window.location.href = "./thank.html";
    }
}

linOtoMaintenance.addEventListener("click", buyLinOtoMaintenance);