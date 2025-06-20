

/* Menü soll sich öffnen */
const menuOpenButton = document.querySelector('[data-js-main-menu-open]');
const menuOverlay = document.querySelector('[data-js-main-menu-target]');

menuOpenButton.addEventListener('click', function () {
    menuOverlay.classList.add('is-active');
})

/* Alternativ, wenn Funktion oft benutzt wird */
// function openMenu() {
//     console.log('Menu opened');
// }

/* Search soll sich öffnen */
const searchOpenButton = document.querySelector('[data-js-main-search-open]');

/* Menü soll sich schließen */
const menuCloseButton = document.querySelector('[data-js-main-menu-close]');

menuCloseButton.addEventListener('click', function () {
    menuOverlay.classList.remove('is-active');
});


/* Navigation dynamisch generieren */
const pageNavigation = document.querySelector('[data-js-page-navigation-menu]');
console.log(pageNavigation);

const sectionHeadlines = document.querySelectorAll('[data-js-page-navigation-content] > section > h2');

/* hohe Fehlerwahrscheinlichkeit bei komplexem Code */
// sectionHeadlines.forEach(function(headline) {

//     const sectionID = createSlug(headline.innerText);

//     const pageNavigationItem = document.createElement('li');
//     const pageNavigationAnchor = document.createElement('a');
//     pageNavigationAnchor.setAttribute('href', '#' + sectionID);

//     pageNavigationAnchor.innerHTML = headline.innerHTML;
//     pageNavigationItem.appendChild(pageNavigationAnchor);
//     pageNavigation.appendChild(pageNavigationItem);

//     headline.parentElement.setAttribute('id', sectionID);
// });

/* übersichtlicherer Code */
sectionHeadlines.forEach(function (headline) {
    const sectionID = createSlug(headline.innerText);

    pageNavigation.innerHTML += `
    <li>
        <a href="#${sectionID}">${headline.innerText}</a>
    </li>
    `;

    headline.parentElement.setAttribute('id', sectionID);
})



// function to create a slug from a string without double dashes and keep german umlauts
function createSlug(text) {
    return text
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/ß/g, 'ss')
        .replace(/[^a-z0-9\s-]/g, '') // remove special characters
        .trim()
        .replace(/\s+/g, '-') // replace spaces with dashes
        .replace(/--+/g, '-'); // replace multiple dashes with a single dash
}