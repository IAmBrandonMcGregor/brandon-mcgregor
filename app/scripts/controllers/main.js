'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', 'ScreenSpySrv', function ($scope, ScreenSpySrv) {
	
	$scope.minimize_name = false;

	$scope.Init = function() {
		// Apply the custom style to the scrollbar.
		// (function ($) {
		// 	$(window).load(function () {
		// 		var ws = $('#Widescreen')
		// 		ws.mCustomScrollbar({
		// 		    theme:"dark"
		// 		});

		// 		ws.addClass("visible");
		// 	});
		// })(jQuery);

		// Manually call ScreenSpySrv once and then watch for updates.
		$scope.main_height_binding = ScreenSpySrv.GetSectionHeights().main;
		window.addEventListener('resize', function () {
			$scope.main_height_binding = ScreenSpySrv.GetSectionHeights().main;
			$scope.$apply();
		}.bind($scope, ScreenSpySrv), false);

		jQuery('#Widescreen').scroll(function () {
			if (jQuery('#Widescreen').scrollTop() > 2)
				$scope.minimize_name = true;
			else
				$scope.minimize_name = false;
			$scope.$apply();
		}.bind($scope));
	};

	$scope.GetMainViewHeight = function () {
		var mNavH = document.getElementById('MainNavigation').offsetHeight,
			sNavH = document.getElementById('SubNavigation').offsetHeight,
			winH = window.innerHeight;

		return (winH - mNavH - sNavH) + 'px';
	};



	$scope.Init();

}]);
