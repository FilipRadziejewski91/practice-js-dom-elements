console.log('DOM');

const element = document.querySelectorAll("[data-url]");
element.forEach(function (item) {
    const adres = (item.getAttribute('data-url'));
    item.setAttribute('href', adres);
});