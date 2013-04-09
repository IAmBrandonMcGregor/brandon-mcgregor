'use strict';

angular.module('brandonMcgregorApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      });
  }]);
