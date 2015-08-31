'use strict';

export default class Toggle {
  constructor() {
    console.log('Toggle module');
  }
  listen() {
    let buttons = document.querySelectorAll('[data-target]'),
        body = document.querySelector('body');
    for (let i=0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', event => {
        let target = event.target.attributes['data-target'].value;
        // TODO: Eliminar todas las clases y añadir la pertinente
        body.classList.toggle('is-'+target+'-open', !body.classList.contains('is-'+target+'-open'));
      });
    }
  }
}
