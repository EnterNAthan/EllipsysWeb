// const titreSpans = document.querySelectorAll('h1 span');
// const btns = document.querySelectorAll('.ensavoirplus');
// const logo = document.querySelector('#logo_elypsis');
// const medias = document.querySelectorAll('.validation-item');
// const l1 = document.querySelector('.l1');
// const l2 = document.querySelector('.l2');

// window.addEventListener('load', () => {

//     const TL = gsap.timeline({paused: true});

//     TL
//     .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
//     .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
//     .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
//     .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
//     .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
//     .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

//     TL.play();
// })

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animation du titre
    tl
    .from(".l1", { width: 0, duration: 1 })
    .from(".l2", { width: 0, duration: 1 }, "-=0.5")
    .from("#logo_elypsis", { scale: 0, duration: 0.5 }, "-=0.5")
    .from(".nav-links", { opacity: 0, stagger: 0.2 }, "-=0.5")
    

    tl.from("h1",{opacity: 0, x: -100, stagger: 1});
    // Animation du texte
    tl.from("h1 span", { opacity: 0, y: -50, stagger: 1 });

    // Animation des éléments de validation
    tl.from(".validation-item", { opacity: 0, x: -50, stagger: 0.2 }, "-=0.5");

    // Animation du bouton
    tl.from(".btncontact_accueil", { opacity: 0, y: 50 }, "-=0.3");

    // Lancement de l'animation
    tl.play();