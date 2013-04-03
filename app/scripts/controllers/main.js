'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', '$location', '$rootScope', '$timeout', 'WindowSrvc', 
function ($scope, $location, $rootScope, $timeout, WindowSrvc) {

	$scope.Init = function () {
		
		// Setup Screen Size and Listening
		$scope.SetDynamicStyling();
		$scope.$on('Resize', function () {
			$scope.SetDynamicStyling();
			$scope.$apply();
		});
		
		$rootScope.sections = [
			{
				name : 'Hello',
				template_file : 'views/hello.html'
			},
			{
				name : 'Portfolio',
				template_file : 'views/portfolio.html'
			}/*,
			{
				name : 'Find Me',
				template_file : 'views/find_me.html'
			}*/
		];
	};

	$scope.SetDynamicStyling = function () {
		$scope.scrolling_area_dynamic_styling = {
			height : ((WindowSrvc.dimensions.screen.height - WindowSrvc.dimensions.header.height) + 'px')
		};
	};

	$scope.$on('$viewContentLoaded', function () {
		$timeout(function () {
			WindowSrvc.Init();
			$scope.SetDynamicStyling();
			WindowSrvc.GoTo({suppressAnimation : true});
			// ensure it's done.
			if (WindowSrvc.dimensions.navigable_section.height >= 0) {
				$timeout(function () {
					WindowSrvc.Init();
					$scope.SetDynamicStyling();
					WindowSrvc.GoTo({suppressAnimation : true});
				}, 600);
			}
		}, 200);
	});

	$scope.$on('$routeUpdate', function () {
		WindowSrvc.GoTo();
	}, true);

	// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
	// ~ ~ ~ ~ ~  Post-Declaration Executions  ~ ~ ~ ~ ~ ~ 
	// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
	$scope.Init();
}]);
