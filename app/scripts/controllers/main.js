'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', 'WindowSrvc', function ($scope, WindowSrvc) {
	$scope.container_styling = { width: '200px' };

	// Once the page has loaded, call the Window Service to read the screen's dimensions.
	(function ($, WindowSrvc) {

		// Read the screen dimensions once the screen has rendered.
		$(window).ready(function () {
			WindowSrvc.CaptureScreenDimensions();
			$scope.container_styling.width = WindowSrvc.main_page.width + 'px';
		}.bind(WindowSrvc));

	})(jQuery, WindowSrvc);
	
}]);
