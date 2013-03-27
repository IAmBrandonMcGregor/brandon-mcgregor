'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', 'WindowSrvc', function ($scope, WindowSrvc) {

	$scope.scrolling_area_dynamic_styling = {
		height : (WindowSrvc.dimensions.screen.height - WindowSrvc.dimensions.header.height)
	};

	console.log('scrolling_area_dynamic_styling = ' + $scope.scrolling_area_dynamic_styling);
}]);
