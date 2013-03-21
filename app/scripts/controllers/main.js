'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', 'ScreenSpySrv', function ($scope, ScreenSpySrv) {

	$scope.Init = function() {
		// Manually call ScreenSpySrv once and then watch for updates.
		$scope.main_height_binding = ScreenSpySrv.GetSectionHeights().main;
		window.addEventListener('resize', function () {
			$scope.main_height_binding = ScreenSpySrv.GetSectionHeights().main;
			$scope.$apply();
		}.bind($scope, ScreenSpySrv), false);
	};

	$scope.GetMainViewHeight = function () {
		var mNavH = document.getElementById('MainNavigation').offsetHeight,
			sNavH = document.getElementById('SubNavigation').offsetHeight,
			winH = window.innerHeight;

		return (winH - mNavH - sNavH) + 'px';
	};



	$scope.Init();

}]);
