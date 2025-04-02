// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Scroll effect for navigation links
    const navLinks = document.querySelectorAll("header nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("pdfModal");
  const pdfPreview = document.getElementById("pdfPreview");
  const closeBtn = document.querySelector(".close");
  const openPdfBtn = document.getElementById("openPdfBtn");
  const downloadPdfBtn = document.getElementById("downloadPdfBtn");
  let currentPdfUrl = "";

  // Ajout des événements sur chaque image de la galerie
  document.querySelectorAll(".doc-img").forEach(img => {
    img.addEventListener("click", function () {
      currentPdfUrl = this.getAttribute("data-pdf");
      pdfPreview.src = currentPdfUrl;
      modal.style.display = "block";
    });
  });

  // Fermer le modal en cliquant sur la croix
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    pdfPreview.src = "about:blank";
  });

  // Fermer le modal en cliquant en dehors du contenu
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      pdfPreview.src = "about:blank";
    }
  });

  // Bouton pour ouvrir le PDF dans un nouvel onglet
  openPdfBtn.addEventListener("click", function () {
    window.open(currentPdfUrl, "_blank");
  });

  // Bouton pour télécharger le PDF
  downloadPdfBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = currentPdfUrl;
    link.download = currentPdfUrl.substring(currentPdfUrl.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


function scrollToSection(event, sectionId) {
    event.preventDefault(); // Empêche la redirection immédiate
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

    // Redirige après 2 secondes sauf si un double clic est détecté
    setTimeout(() => {
        if (!event.detail || event.detail < 2) { // Vérifie que ce n'est pas un double clic
            window.location.href = event.currentTarget.href;
        }
    }, 2000);
}

function openPage(event) {
    event.preventDefault(); // Empêche le scroll
    window.location.href = event.currentTarget.href; // Ouvre immédiatement la page
}