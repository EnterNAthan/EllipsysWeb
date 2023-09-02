const boutonEnSavoirPlus = document.querySelector(".ensavoirplus");
const modal = document.getElementById("explications-modal");
const closeModal = document.querySelector(".close-modal");

// Fonction pour afficher la boîte modale
function openModal() {
    modal.classList.add("active");
}

// Fonction pour masquer la boîte modale
function closeModalFunc() {
    modal.classList.remove("active");
}

boutonEnSavoirPlus.addEventListener("click", openModal);
closeModal.addEventListener("click", closeModalFunc);

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModalFunc();
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
