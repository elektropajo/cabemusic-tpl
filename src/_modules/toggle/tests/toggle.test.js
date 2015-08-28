'use strict';

import Toggle from '../toggle';

describe('Toggle View', function() {

  beforeEach(() => {
    this.toggle = new Toggle();
  });

  it('Should run a few assertions', () => {
    expect(this.toggle).to.exist;
  });

});
