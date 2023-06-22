const applications = {
  antoine: {
    name: "Antoine",
    downloadLink: "https://github.com/enioaiello/antoine/releases/latest/download/antoine.dmg",
    buttonSelector: "#antoineDownloadButton"
  },
  otoMaintenance: {
    name: "Oto-Maintenance",
    downloadLink: "https://github.com/enioaiello/Oto-Maintenance/releases/latest/download/oto-maintenance.bat",
    buttonSelector: "#otoMaintenanceDownloadButton"
  },
  linOtoMaintenance: {
    name: "linOto-Maintenance",
    downloadLink: "blob:https://github.com/b8e3989b-eae1-4338-942b-044340e31886",
    buttonSelector: "#linOtoMaintenanceDownloadButton"
  }
};

function buyApplication(app) {
  const choice = confirm("Acheter " + app.name + " ?");
  if (choice) {
    localStorage.setItem(app.name, true);
    window.open(app.downloadLink, "_blank");
    window.location.href = "./thank.html";
  }
}

for (const key in applications) {
  if (applications.hasOwnProperty(key)) {
    const app = applications[key];
    const button = document.querySelector(app.buttonSelector);
    button.addEventListener("click", function () {
      buyApplication(app);
    });
  }
}
