'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', 'WindowSrvc', function ($scope, WindowSrvc) {
	$scope.container_styling = { width: WindowSrvc.main_page.width + 'px' };
	$scope.widthListener = function () {
		console.log("blahblahblah");
	};

	//$scope.$watch('WindowSrvc.main_page', $scope.widthListener);

	// $scope.$watch(
	// 	function () { 
	// 		return WindowSrvc.IsUpdated(); 
	// 	},
	// 	function () {
	// 		$scope.widthListener();
	// 	});
	
	$scope.$on("ScreenResize", function () {
		console.log("I heard the broadcast.");
		$scope.container_styling.width = WindowSrvc.main_page.width + 'px';
		$scope.$apply();
	});

}]);
