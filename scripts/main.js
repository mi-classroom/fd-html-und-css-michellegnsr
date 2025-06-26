
// -------------------------- Menu --------------------------
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

/* Menü soll sich schließen */
const menuCloseButton = document.querySelector('[data-js-main-menu-close]');

menuCloseButton.addEventListener('click', function () {
    menuOverlay.classList.remove('is-active');
});

// -------------------------- Suche --------------------------
// Suche soll sich öffnen
const searchOpenButton = document.querySelector('[data-js-search-open]');
const searchOverlay = document.querySelector('[data-js-search-target]');
searchOpenButton.addEventListener('click', function () {
    searchOverlay.classList.add('is-active');
});

// Suche soll sich schließen
const searchCloseButton = document.querySelector('[data-js-search-close]');
searchCloseButton.addEventListener('click', function () {
    searchOverlay.classList.remove('is-active');
});

// Suchwort soll in der Konsole angezeigt werden sobald man auf submit drückt
const searchForm = document.querySelector('[data-js-search-form]');
searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // verhindert das Neuladen der Seite
    const searchInput = document.querySelector('[data-js-search-input]');
    console.log(searchInput.value);
    searchOverlay.classList.remove('is-active'); // schließt die Suche nach dem Absenden
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