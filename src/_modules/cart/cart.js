'use strict';

export default class Cart {
  constructor() {
    console.log('Cart module');
  }
  listen() {
    let cart = document.querySelector('[data-cart]'),
        toggle = cart.querySelector('[data-cart-toggle]');
    toggle.addEventListener('click', event => {
      let container = cart.querySelector('.cart-container');
      container.classList.toggle('is-cart-container-open', !container.classList.contains('is-cart-container-open'));
    });
  }
}
