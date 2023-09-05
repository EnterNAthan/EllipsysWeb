// Sélectionnez tous les éléments d'accordéon
// creer une alerte ppour testez que le javascript est bien relié a la page html
console.log("ca marche")

function initAccordeon() {
  const accordeonItems = document.querySelectorAll('.accordeon-item');

  accordeonItems.forEach(item => {
    const header = item.querySelector('.accordeon-header');
    const content = item.querySelector('.accordeon-content');

    header.addEventListener('click', () => {
      accordeonItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.accordeon-content').style.maxHeight = '0';
        }
      });

      item.classList.toggle('open');
      if (item.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
}

// fonction pour chargez le script de scroll

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.async = true;
  script.onload = callback;
  document.head.appendChild(script);
}

// Fonction pour charger les scripts lorsque les éléments deviennent visibles
function loadScriptsOnScroll() {
  var elements = document.querySelectorAll('[data-js-src]');

  elements.forEach(function(element) {
      var rect = element.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          var scriptSrc = element.getAttribute('data-js-src');
          
          // Charger le script JavaScript associé à l'élément
          loadScript(scriptSrc, function() {
              // Supprimer l'attribut data-js-src pour éviter de charger le script à nouveau
              element.removeAttribute('data-js-src');
          });
      }
  });
}


// Écouter l'événement de défilement de la page
window.addEventListener('scroll', loadScriptsOnScroll);

// Appeler la fonction pour charger les scripts initiaux lorsque la page se charge
window.addEventListener('load', function() {
  loadScriptsOnScroll();
});


// Appeler la fonction pour initialiser l'accordéon

function highlightCurrentPage() {
  const navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});
}

// Appelle la fonction lors du chargement de la pag

initAccordeon();
highlightCurrentPage();


const boutonEnSavoirPlus = document.querySelector(".ensavoirplus");
const boutonEnSavoirPlus2 = document.querySelector(".ensavoirplus2");
const boutonEnSavoirPlus3 = document.querySelector(".ensavoirplus3");
const modal = document.getElementById("explications-modal1");
const modal2 = document.getElementById("explications-modal2");
const modal3 = document.getElementById("explications-modal3");
const closeModal = document.querySelector(".close-modal");
const closeModal2 = document.querySelector(".close-modal2");
const closeModal3 = document.querySelector(".close-modal3");

// Fonction pour afficher la boîte modale
function openModal() {
    modal.classList.add("active");
}

function openModal2() {
    modal2.classList.add("active");
}

function openModal3() {
    modal3.classList.add("active");
}

// Fonction pour masquer la boîte modale
function closeModalFunc() {
    modal.classList.remove("active");
}

function closeModalFunc2() {
    modal2.classList.remove("active");
}

function closeModalFunc3() {
    modal3.classList.remove("active");
}

boutonEnSavoirPlus.addEventListener("click", openModal);
boutonEnSavoirPlus2.addEventListener("click", openModal2);
boutonEnSavoirPlus3.addEventListener("click", openModal3);
closeModal.addEventListener("click", closeModalFunc);
closeModal2.addEventListener("click", closeModalFunc2);
closeModal3.addEventListener("click", closeModalFunc3);

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModalFunc();
    }
});

window.addEventListener("click", (event) => {
    if (event.target === modal2) {
        closeModalFunc2();
    }
});

window.addEventListener("click", (event) => {
    if (event.target === modal3) {
        closeModalFunc3();
    }
});

const nav = document.querySelector('nav');

// Fonction pour afficher une légère ombre sur la barre de navigation quand on scroll
function handleScroll() {
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
}
window.addEventListener('scroll', handleScroll);


// Fonction pour afficher les questions dans la faq

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        question.classList.toggle('open');
        const answer = question.querySelector('.answer');

        if (question.classList.contains('open')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.opacity = '1';
        } else {
            answer.style.maxHeight = '0';
            answer.style.opacity = '0';
        }
    });
});


// Fonction pour afficher le bouton de retour en haut de page

window.addEventListener("scroll", () => {
    const scrollButton = document.querySelector(".scroll-to-top");
    if (document.documentElement.scrollTop > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

document.querySelector(".scroll-to-top a").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
