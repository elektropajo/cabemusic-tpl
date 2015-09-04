'use strict';

import OnePageForm from '../one-page-form';

describe('OnePageForm View', function() {

  beforeEach(() => {
    this.onePageForm = new OnePageForm();
  });

  it('Should run a few assertions', () => {
    expect(this.onePageForm).to.exist;
  });

});
