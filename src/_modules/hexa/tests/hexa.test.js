'use strict';

import Hexa from '../hexa';

describe('Hexa View', function() {

  beforeEach(() => {
    this.hexa = new Hexa();
  });

  it('Should run a few assertions', () => {
    expect(this.hexa).to.exist;
  });

});
