'use strict';

import Cart from '../cart';

describe('Cart View', function() {

  beforeEach(() => {
    this.cart = new Cart();
  });

  it('Should run a few assertions', () => {
    expect(this.cart).to.exist;
  });

});
