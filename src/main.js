/* eslint-disable import/no-duplicates */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import { getSavedCartIDs } from './helpers/cartFunctions';
import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createCartProductElement, createProductElement } from './helpers/shopFunctions';
import './style.css';

// Elements
document.querySelector('.cep-button').addEventListener('click', searchCep);
const sectionElement = document.querySelector('.products');
const createPhrase = document.createElement('h2');
const cardProducts = document.querySelector('.cart__products');
const subTotal = document.querySelector('.total-price');

function createText(phrase, tag) {
  createPhrase.innerText = phrase;
  createPhrase.className = tag;
  sectionElement.appendChild(createPhrase);
}

function removeText() {
  const loadingText = document.querySelector('.loading');
  loadingText.remove();
}

const createListProducts = async () => {
  try {
    createText('carregando...', 'loading');
    const listProducts = await fetchProductsList('computador');
    listProducts.forEach((product) => {
      const newProduct = createProductElement({
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
      });
      sectionElement.appendChild(newProduct);
    });
    removeText();
  } catch (error) {
    createText('Algum erro ocorreu, recarregue a página e tente novamente', 'error');
  }
};
createListProducts();

async function recoverCards() {
  const returnCards = getSavedCartIDs();
  const newList = returnCards.map((id) => fetchProduct(id));
  const returnListResult = await Promise.all(newList);
  returnListResult.forEach((product) => {
    const newProduct = createCartProductElement({
      id: product.id,
      title: product.title,
      price: product.price,
      pictures: product.pictures,
    });
    cardProducts.appendChild(newProduct);
  });
  const priceTotal = returnListResult.reduce((acc, curr) => acc + curr.price, 0);
  subTotal.innerHTML = priceTotal;
}

window.onload = recoverCards;
