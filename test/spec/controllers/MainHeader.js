'use strict';

describe('Controller: MainHeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('brandonMcgregorApp'));

  var MainHeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    MainHeaderCtrl = $controller('MainHeaderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
