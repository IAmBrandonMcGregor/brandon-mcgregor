'use strict';

angular.module('brandonMcgregorApp')
.controller('MainHeaderCtrl', ['$scope', '$rootScope', '$location', 'WindowSrvc', function ($scope, $rootScope, $location, WindowSrvc) {

	$scope.Navigate = function (idx) {
		$rootScope.active_section_idx = idx;
		$location.search($scope.sections[idx].name.replace(' ', '-'));
	};

	$scope.GoTo = function (idx) {
		//$rootScope.active_section_idx = idx;
		$location.search($scope.sections[idx].name.replace(' ', '-'));
		WindowSrvc.GoTo();
	};
}]);
