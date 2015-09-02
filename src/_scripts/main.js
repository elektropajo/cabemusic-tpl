// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Toggle from '../_modules/toggle/toggle';
import Nav from '../_modules/nav/nav';
import Hexa from '../_modules/hexa/hexa';

$(() => {
  let toggle = new Toggle(),
      nav = new Nav(),
      hexa = new Hexa();

  toggle.listen();
  nav.listen();
});
