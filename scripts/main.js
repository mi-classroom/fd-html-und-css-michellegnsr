

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


/* Navigation dynamisch generieren */
const pageNavigation = document.querySelector('[data-js-page-navigation-menu]');
console.log(pageNavigation);

const sectionHeadlines = document.querySelectorAll('[data-js-page-navigation-content] > section > h2');
sectionHeadlines.forEach(function(headline) {

    const sectionID = headline.innerText.toLowerCase().replaceAll(' ', '-');

    const pageNavigationItem = document.createElement('li');
    const pageNavigationAnchor = document.createElement('a');

    pageNavigationAnchor.innerHTML = headline.innerHTML;
    pageNavigationItem.appendChild(pageNavigationAnchor);
    pageNavigation.appendChild(pageNavigationItem);
});