// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import Header from '../_modules/header/header';
import Nav from '../_modules/nav/nav';
import Footer from '../_modules/footer/footer';

$(() => {
  new Link(); // Activate Link modules logic
  new Header();
  new Nav();
  new Footer();
  console.log('Welcome to Cabemusic.com!');
});
