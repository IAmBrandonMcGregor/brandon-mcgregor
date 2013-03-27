'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', 'WindowSrvc', function ($scope, WindowSrvc) {

	$scope.Init = function () {
		
		// Setup Screen Size and Listening
		$scope.SetDynamicStyling();
		$scope.$on('Resize', function () {
			$scope.SetDynamicStyling();
			$scope.$apply();
		});
		
	};

	$scope.SetDynamicStyling = function () {
		$scope.scrolling_area_dynamic_styling = {
			height : ((WindowSrvc.dimensions.screen.height - WindowSrvc.dimensions.header.height) + 'px')
		};
	};

	// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
	// ~ ~ ~ ~ ~  Post-Declaration Executions  ~ ~ ~ ~ ~ ~ 
	// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
	$scope.Init();
}]);
