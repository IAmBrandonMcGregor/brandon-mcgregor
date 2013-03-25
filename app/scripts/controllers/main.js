'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', 'WindowSrvc', function ($scope, WindowSrvc) {
	// Set the initial height of each panel.
	$scope.container_styling = { 
		//width: WindowSrvc.main_page.width + 'px',
		height: WindowSrvc.main_page.height + 'px' };

	// Listen for broadcasts from the WindowSrvc...
	//		... RESIZE
	$scope.$on("ScreenResize", function () {
		$scope.container_styling.height = WindowSrvc.main_page.height + 'px';
		$scope.$apply();
	});
	//		... SCROLL
	$scope.$on("Scroll", function () {
		console.log("Scrolled!");
	});






	$scope.panels = [
		{
			name : "works",
			view_file : "views/works.html"
		},
		{
			name : "about me",
			view_file : "views/about_me.html"
		}
	];

}]);
