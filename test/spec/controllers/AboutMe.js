'use strict';

describe('Controller: AboutMeCtrl', function () {

  // load the controller's module
  beforeEach(module('brandonMcgregorApp'));

  var AboutMeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AboutMeCtrl = $controller('AboutMeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
