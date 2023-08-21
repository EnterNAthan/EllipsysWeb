// Sélectionnez tous les éléments d'accordéon
// creer une alerte ppour testez que le javascript est bien relié a la page html
console.log("ca marche")

// Ajoutez un écouteur d'événements à chaque élément d'accordéon
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