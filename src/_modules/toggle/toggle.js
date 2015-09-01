'use strict';

export default class Toggle {
  constructor() {
    console.log('Toggle module');
  }
  listen() {
    let buttons = document.querySelectorAll('[data-target]'),
        body = document.querySelector('body'),
        top = document.querySelector('#l-page-top');
    // Listeners de los botones de despliegue de menús
    for (let i=0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', event => {
        let target = event.target.attributes['data-target'].value;
        // TODO: Eliminar todas las clases y añadir la pertinente
        body.classList.toggle('is-'+target+'-open', !body.classList.contains('is-'+target+'-open'));
      });
    }
    //Listener de scroll
    window.addEventListener('scroll', event => {
      let height = document.querySelector('#l-page-top').offsetHeight,
          scroll = window.scrollY
      body.classList.toggle('is-l-page-top-coloured', scroll > height );
    });
  }
}
