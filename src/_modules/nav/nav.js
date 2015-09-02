'use strict';

export default class Nav {
  constructor() {
    console.log('Nav module');
  }
  listen() {
    console.log('Nav listening');
    // Level listeners
    let callers = document.querySelectorAll('[data-togglelevel]');
    for (let i=0; i < callers.length; i++) {
      callers[i].addEventListener('click', event => {
        let level = event.target.dataset.togglelevel,
            target = event.target.parentNode;
        if (target.dataset.togglelevel !== level) {
          target = target.querySelector('[data-level]');
        }
        target.classList.toggle('is-submenu-open', !target.classList.contains('is-submenu-open'));
      });
    }
  }
}
