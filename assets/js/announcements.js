document.addEventListener("DOMContentLoaded", function() {
  const announcementsDiv = document.querySelector(".announcements .articleContain");
  const announcementsArticles = announcementsDiv.querySelectorAll("article");

  if (announcementsArticles.length > 0) {
    return;
  }

  const articles = [
    {
      title: "Déposez vos applications",
      content: "Contactez <a href='mailto:aielloenio@icloud.com'>cette adresse email</a> pour faire une demande de dépôt d'application ! Vous devez avoir un compte <strong>Admin Services</strong> vérifié en tant que développeur."
    },
    {
      title: "Connexion",
      content: "Utilisez votre compte <strong>Admin Services</strong> sur <strong>shopei</strong>. C'est simple et rapide !"
    },
    {
      title: "Ouverture !",
      content: "Ouverture de <strong>shopei</strong> sur le réseau <strong>Admin Services</strong> et <strong>Corundum</strong>."
    }
  ];

  articles.forEach(function(article) {
    const articleElement = createArticleElement(article);
    announcementsDiv.appendChild(articleElement);
  });
});

function createArticleElement(article) {
  const articleElement = document.createElement("article");
  const titleElement = document.createElement("h4");
  titleElement.innerHTML = article.title;
  const contentElement = document.createElement("p");
  contentElement.innerHTML = article.content;

  articleElement.appendChild(titleElement);
  articleElement.appendChild(contentElement);

  return articleElement;
}
