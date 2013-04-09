'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', '$location', '$rootScope', '$timeout', 'WindowSrvc', 
function ($scope, $location, $rootScope, $timeout, WindowSrvc) {

	$scope.Init = function () {

		$rootScope.active_section_idx = 0;
		
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
			},
			{
				name : 'Find Me',
				template_file : 'views/find_me.html'
			}
		];
	};

	$scope.SetDynamicStyling = function () {
		$scope.scrolling_area_dynamic_styling = {
			height : ((WindowSrvc.dimensions.screen.height - WindowSrvc.dimensions.header.height) + 'px')
			//height : (WindowSrvc.dimensions.screen.height - 342 + 'px')
		};
		$scope.section_dynamics_styling = {
			height : ((WindowSrvc.dimensions.screen.height - WindowSrvc.dimensions.header.height) + 'px')
			//height : (WindowSrvc.dimensions.screen.height - 342 + 'px')
		};

		// Ensure a minimum section size of 650 pixels.
		if (parseInt($scope.section_dynamics_styling.height) < 650) {
			$scope.section_dynamics_styling = { height : '650px' };
		}
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

	// $scope.$on('$routeUpdate', function () {
	// 	WindowSrvc.GoTo();
	// }, true);

	$scope.$on('Scroll', function () {
		var pos = WindowSrvc.positions.screen.y,
			center = WindowSrvc.dimensions.screen.y / 2,
			new_idx = null,
			center_of_project = null;

			for (var i=0, l=$rootScope.sections.length; i<l; i++) {
				center_of_project = (WindowSrvc.dimensions.screen.height * (i+1));

				if (WindowSrvc.positions.screen.y <= (center_of_project-200)) {
					new_idx = i;
					break;
				}
			}

		$rootScope.active_section_idx = i;
		$location.search($scope.sections[$rootScope.active_section_idx ].name.replace(' ', '-'));
		$scope.$apply();
	}, true);
	// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
	// ~ ~ ~ ~ ~  Post-Declaration Executions  ~ ~ ~ ~ ~ ~ 
	// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
	$scope.Init();
}]);
