'use strict';

describe('Service: ScreenSpySrv', function () {

  // load the service's module
  beforeEach(module('brandonMcgregorApp'));

  // instantiate service
  var ScreenSpySrv;
  beforeEach(inject(function (_ScreenSpySrv_) {
    ScreenSpySrv = _ScreenSpySrv_;
  }));

  it('should do something', function () {
    expect(!!ScreenSpySrv).toBe(true);
  });

});
