/* Menü soll sich öffnen */
const menuOpenButton = document.querySelector('[data-js-main-menu-open]');
const menuOverlay = document.querySelector('[data-js-main-menu-target]');
menuOpenButton.addEventListener('click', function(){
    menuOverlay.classList.add('is-active');
})

/* Alternativ, wenn Funktion oft benutzt wird */
// function openMenu() {
//     console.log('Menu opened');
// }

/* Menü soll sich schließen */
const menuCloseButton = document.querySelector('[data-js-main-menu-close]');

menuCloseButton.addEventListener('click', function() {
    menuOverlay.classList.remove('is-active');
});

