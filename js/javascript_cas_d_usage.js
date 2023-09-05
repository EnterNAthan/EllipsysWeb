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
