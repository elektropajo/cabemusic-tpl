'use strict';

import Front from '../front';

describe('Front View', function() {

  beforeEach(() => {
    this.front = new Front();
  });

  it('Should run a few assertions', () => {
    expect(this.front).to.exist;
  });

});
