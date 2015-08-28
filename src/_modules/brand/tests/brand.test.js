'use strict';

import Brand from '../brand';

describe('Brand View', function() {

  beforeEach(() => {
    this.brand = new Brand();
  });

  it('Should run a few assertions', () => {
    expect(this.brand).to.exist;
  });

});
