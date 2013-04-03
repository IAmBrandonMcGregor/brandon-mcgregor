'use strict';

angular.module('brandonMcgregorApp')
.controller('MainHeaderCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

	//$rootScope.active_section_idx = 0;

	$scope.Navigate = function (idx) {
		$rootScope.active_section_idx = idx;
		$location.search($scope.sections[idx].name.replace(' ', '-'));
	};

}]);
