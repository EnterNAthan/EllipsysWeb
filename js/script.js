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