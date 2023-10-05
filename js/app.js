// loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    document.documentElement.classList.add('no-scroll'); // Empêche le défilement

    loader.classList.add('fondu-out');
    setTimeout(() => {
        loader.remove();
        document.documentElement.classList.remove('no-scroll'); // Rétablit le défilement
    }, 700);




    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animation du titre
    tl
    .from("#logo_elypsis", { opacity: 0, stagger : 0.5 }, "-=0.5")
    .from(".links", { opacity: 0, stagger: 0.5 }, "-=0.5")


    tl.from("h1",{opacity: 0, x: -100, stagger: 1},);
    // Animation du texte
    tl.from("h1 span", { opacity: 0, y: -50, stagger: 1 },"-=0.5" );

    tl.from(".acdroite svg",{ opacity: 0, x: -150, stagger:0.2})

    // Animation des éléments de validation
    tl.from(".validation-item", { opacity: 0, x: -50, stagger: 0.2}, "-=0.5");

    // Animation du bouton
    tl.from(".btncontact_accueil", { opacity: 0, y: 50 }, "-=0.3");

    // Lancement de l'animation
    tl.play();

})