'use strict';

export default class Hexa {
  constructor() {
    let hexa = document.querySelectorAll('[data-hexagon]');
    console.log('Hexa module');
    for (let i=0; i < hexa.length; i++) {
      let src = hexa[i].getElementsByTagName("img")[0].attributes.src.value;
      src = 'url("'+src+'")';
      hexa[i].style.backgroundImage = src;
      hexa[i].removeChild(hexa[i].querySelector('img'));
    }

  }
}
