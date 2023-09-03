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
        closeModalFunc2();
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