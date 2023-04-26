console.log('DOM');

const curr = document.querySelector('.js-curr');
const cloneCurr = curr.cloneNode(true);
const article = curr.parentElement;
article.appendChild(cloneCurr);
cloneCurr.innerText = 'Usuń z koszyka'

if (article.hasChildNodes()) {
    const children = Array.from(article.children);
    children.forEach(function (item) {
        if (item !== curr) {
            item.classList.add('siblings')
        }
    })
}

article.nextElementSibling.title = 'nextElementSibling'

const lastArticle = article.nextElementSibling.nextElementSibling;
const btn = lastArticle.children[lastArticle.children.length - 1];
const pElement = document.createElement('p');
pElement.innerText = 'Jakaś dodatkowa treść';

lastArticle.insertBefore(pElement, btn);

const articleZero = article.cloneNode(true);
const parentArticle = article.parentElement;
parentArticle.insertBefore(articleZero, article)