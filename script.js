// Navbar
/*let lastScrollTOP = 0;
navbar = document.getElementById(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffsett || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTOP) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTOP = scrollTop;
});*/

// Typed
var typed = new Typed(".typed", {
  strings: [
    "Bonjour à tous,",
    "Après de multiples expériences dans différents milieu professionnel <br>(Vous pourrez le constater dans mon CV ci-dessous).<br>J'ai décidé de me lancer dans l'apprentissage du code. J'ai commencé par voir les bases de la création de site web en apprennant HTML et CSS. Depuis peu je me met à étudier le langage Javascript et ses différents Frameworks. Aujourd'hui je souhaite réaliser une formation pour obtenir un dîplome et je suis à la recherche d'une entreprise pouvant m'accueillir pour un contrat d'apprentissage ou un stage si je trouve le moyen de faire un financement personnel.",
  ],
  typeSpeed: 40,
});
