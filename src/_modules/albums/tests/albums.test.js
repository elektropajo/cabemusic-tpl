'use strict';

import Albums from '../albums';

describe('Albums View', function() {

  beforeEach(() => {
    this.albums = new Albums();
  });

  it('Should run a few assertions', () => {
    expect(this.albums).to.exist;
  });

});
