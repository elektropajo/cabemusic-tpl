// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import Header from '../_modules/header/header';
import Brand from '../_modules/brand/brand';
import Toggle from '../_modules/toggle/toggle';
import Nav from '../_modules/nav/nav';
import Front from '../_modules/front/front';
import Footer from '../_modules/footer/footer';

$(() => {
  new Link();
  new Header();
  let toggle = new Toggle();
  new Nav();
  new Footer();

  toggle.listen();

});
