// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Toggle from '../_modules/toggle/toggle';
import Nav from '../_modules/nav/nav';
import Hexa from '../_modules/hexa/hexa';
import Cart from '../_modules/cart/cart';
import Albums from '../_modules/albums/albums';

$(() => {
  let toggle = new Toggle(),
      nav = new Nav(),
      hexa = new Hexa(),
      cart = new Cart(),
      albums = new Albums();

  toggle.listen();
  nav.listen();
  cart.listen();
});
