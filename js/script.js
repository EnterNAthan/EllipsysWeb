// JAVASCRIPT
// @Ellipsys
// @Auteur: AmpleurWeb
// @Date:   2023





// fonction menu burger
const links = document.querySelectorAll("nav li")
icons.addEventListener('click', () => {
    nav.classList.toggle('active');
});
links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    })
});





// Fonction pour afficher une légère ombre sur la barre de navigation quand on scroll
const nav = document.querySelector('nav');
function handleScroll() {
    if (window.scrollY > 0) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
}
window.addEventListener('scroll', handleScroll);





// Fonction pour l'animation de retour en haut de page
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





// Masquer tous les éléments Lottie
function hideAllLotties() {
    const lotties = document.querySelectorAll('.lottie-container lottie-player');
    lotties.forEach(lottie => {
        lottie.classList.remove('visible');
        lottie.classList.add('hidden');
    });
}
// Fonction pour l'animation de l'accordeon
document.addEventListener('DOMContentLoaded', (event) => {
    initAccordeon();
});
function initAccordeon() {
    const accordeonItems = document.querySelectorAll('.accordeon-item');

    accordeonItems.forEach(item => {
        const title = item.querySelector('.accordeon-title');
        const content = item.querySelector('.accordeon-content');
        const lottieId = item.getAttribute('data-lottie-id');

        title.addEventListener('click', () => {
            accordeonItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                    otherItem.querySelector('.accordeon-content').style.maxHeight = '0';
                }
            });

            item.classList.toggle('open');
            content.style.maxHeight = item.classList.contains('open') ? `${content.scrollHeight}px` : '0';

            // Masquer tous les autres éléments Lottie
            hideAllLotties();

            // Afficher le Lottie associé à cet accordéon
            const newLottiePlayer = document.getElementById(lottieId);
            if (newLottiePlayer) {
                newLottiePlayer.classList.remove('hidden');
                newLottiePlayer.classList.add('visible');
            }
        });
    });
}





// Fonction pour le switch dark/light mode
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;  // Notez que c'est `document.body`, et non `document.querySelector("#body")`
    const toggleSwitch = document.querySelector('#js-switch');

    // Vérifiez si un thème est déjà stocké
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    }

    function toggleDarkLight() {
        if (body.classList.contains('ui-light-theme')) {
            body.classList.remove('ui-light-theme');
            body.classList.add('ui-dark-theme');
            localStorage.setItem('theme', 'ui-dark-theme');  // Sauvegardez dans le localStorage
        } else {
            body.classList.remove('ui-dark-theme');
            body.classList.add('ui-light-theme');
            localStorage.setItem('theme', 'ui-light-theme');  // Sauvegardez dans le localStorage
        }
    }

    toggleSwitch.addEventListener('click', toggleDarkLight);
});





// Animation des etiquettes pop up
document.addEventListener("DOMContentLoaded", function () {
    const etiquettes = document.querySelectorAll('.etiquette');

    etiquettes.forEach(function (etiquette) {
        const popup = etiquette.querySelector('.etiquette-popup');
        const etiquetteContent = etiquette.querySelector('.etiquette-content');

        etiquette.addEventListener('click', function () {
            // Basculer la popup
            popup.classList.toggle('hidden');
            popup.classList.toggle('visible');

            // Agrandir le SVG
            etiquette.classList.toggle('active');

            // Faire disparaître le texte de l'étiquette
            etiquetteContent.classList.toggle('hidden-content');
        });
    });
});





// Animation aimantée du bouton de contact
document.addEventListener('DOMContentLoaded', function () {
    class Button {
        constructor(HTMLButtonElement) {
            this.button = HTMLButtonElement;
            this.width = this.button.offsetWidth;
            this.height = this.button.offsetHeight;
            this.left = this.button.offsetLeft;
            this.top = this.button.offsetTop;
            this.x = 0;
            this.y = 0;
            this.cursorX = 0;
            this.cursorY = 0;
            this.magneticPullX = 0.2; // Ajusté
            this.magneticPullY = 0.3; // Ajusté
            this.isHovering = false;
            this.magnetise();
            this.createRipple();
        }

        onEnter = () => {
            gsap.to(this.button, 0.4, {
                x: this.x * this.magneticPullX,
                y: this.y * this.magneticPullY,
                ease: Power4.easeOut
            });
        };

        onLeave = () => {
            gsap.to(this.button, 0.4, { // Ajusté
                x: 0,
                y: 0,
                ease: Elastic.easeOut.config(1.1, 0.5)
            });
        };

        magnetise = () => {
            document.querySelector("body").addEventListener("mousemove", (e) => {
                this.left = this.button.getBoundingClientRect().left;
                this.top = this.button.getBoundingClientRect().top;
                this.cursorX = e.clientX;
                this.cursorY = e.clientY;

                const center = {
                    x: this.left + this.width / 2,
                    y: this.top + this.height / 2
                };

                this.x = this.cursorX - center.x;
                this.y = this.cursorY - center.y;

                const distance = Math.sqrt(this.x * this.x + this.y * this.y);
                const hoverArea = this.isHovering ? 0.4 : 0.3; // Ajusté

                if (distance < this.width * hoverArea) {
                    if (!this.isHovering) {
                        this.isHovering = true;
                    }
                    this.onEnter();
                } else {
                    if (this.isHovering) {
                        this.onLeave();
                        this.isHovering = false;
                    }
                }
            });
        };

        createRipple = () => {
            this.button.addEventListener("click", () => {
                const circle = document.createElement("span");
                const diameter = Math.max(
                    this.button.clientWidth,
                    this.button.clientHeight
                );
                const radius = diameter / 2;

                const offsetLeft = this.left + this.x * this.magneticPullX;
                const offsetTop = this.top + this.y * this.magneticPullY;

                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${this.cursorX - offsetLeft - radius}px`;
                circle.style.top = `${this.cursorY - offsetTop - radius}px`;
                circle.classList.add("ripple");

                const ripple = this.button.getElementsByClassName("ripple")[0];

                if (ripple) {
                    ripple.remove();
                }

                this.button.appendChild(circle);
            });
        }
    }

    const buttons = document.getElementsByClassName("btncontact_accueil");
    for (const button of buttons) {
        new Button(button);
    }
});





// Fonction pour mettre en surbrillance la page actuelle dans la barre de navigation
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
highlightCurrentPage();





// Tous les boutons uniques pour ouvrir et fermer les boîtes modales
const boutonEnSavoirPlus = document.querySelector(".ensavoirplus");
const boutonEnSavoirPlus2 = document.querySelector(".ensavoirplus2");
const boutonEnSavoirPlus3 = document.querySelector(".ensavoirplus3");
const modal = document.getElementById("explications-modal1");
const modal2 = document.getElementById("explications-modal2");
const modal3 = document.getElementById("explications-modal3");
const closeModal = document.querySelector(".close-modal");
const closeModal2 = document.querySelector(".close-modal2");
const closeModal3 = document.querySelector(".close-modal3");

// Fonctions indépendantes pour afficher les boîtes modales
function openModal() {
    modal.classList.add("active");
}
function openModal2() {
    modal2.classList.add("active");
}
function openModal3() {
    modal3.classList.add("active");
}

// Fonctions indépendantes pour masquer les boîtes modales
function closeModalFunc() {
    modal.classList.remove("active");
}
function closeModalFunc2() {
    modal2.classList.remove("active");
}
function closeModalFunc3() {
    modal3.classList.remove("active");
}

// Écouteurs d'événements pour les boutons des boîtes modales
boutonEnSavoirPlus.addEventListener("click", openModal);
boutonEnSavoirPlus2.addEventListener("click", openModal2);
boutonEnSavoirPlus3.addEventListener("click", openModal3);
closeModal.addEventListener("click", closeModalFunc);
closeModal2.addEventListener("click", closeModalFunc2);
closeModal3.addEventListener("click", closeModalFunc3);

// Si on clique en dehors de la boîte modale, on la masque également
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





// Fonction pour afficher les réponses dans la faq
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


// partie test
// caroussel test
// document.addEventListener("DOMContentLoaded", () => {
//     let index = 0;
//     const carousel = document.getElementById("carousel");
//
//     document.getElementById("prevBtn").addEventListener("click", () => {
//         index -= 1;
//         if (index < 0) index = 0;
//         carousel.scroll({
//             left: 300 * index,
//             behavior: "smooth",
//         });
//     });
//
//     document.getElementById("nextBtn").addEventListener("click", () => {
//         index += 1;
//         if (index >= carousel.children.length) index = carousel.children.length - 1;
//         carousel.scroll({
//             left: 300 * index,
//             behavior: "smooth",
//         });
//     });
// });
