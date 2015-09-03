'use strict';

export default class Nav {
  constructor() {
    console.log('Nav module');
  }
  listen() {
    console.log('Nav listening');
    this.toggle();
    this.watchSize();
  }
  toggle () {
    let callers = document.querySelectorAll('[data-togglelevel]');
    for (let i=0; i < callers.length; i++) {
      callers[i].addEventListener('click', event => {
        let level = event.target.dataset.togglelevel,
            target = event.target.parentNode;
        console.log('Current level: '+ level + '\nTarget: '+ target.dataset.level);
        if (target.dataset.level !== level) {
          target = target.querySelector('[data-level]');
        }
        target.classList.toggle('is-submenu-open', !target.classList.contains('is-submenu-open'));
      });
    }
  }
  watchSize() {
    this.position();
    window.addEventListener('resize', event => {
      this.position();
    });
  }
  position() {
    let w = window.innerWidth,
        colap = 16 * 62, //16px*62em
        caller = document.querySelector('[data-togglelevel]'),
        submenus = document.querySelectorAll('[data-level]'),
        right;
    // TODO: Calcular offsetRight correctamente
    right = w - caller.offsetLeft - caller.clientWidth - 700;
    if (w < colap) {
      right = 'auto';
    } else if (w > colap) {
      right = right + 'px';
    }
    for (let i=0; i < submenus.length; i++) {
      submenus[i].style.right = right;
    }
  }
}
