'use strict';

angular.module('brandonMcgregorApp')
.controller('MainHeaderCtrl', ['$scope', function ($scope) {

	$scope.sections = [
		'Hello',
		'Portfolio',
		'Find Me'
	];

	$scope.active_section = 'Hello';

	$scope.Navigate = function (section) {
		$scope.active_section = section;
	};

}]);
