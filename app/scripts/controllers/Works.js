'use strict';

angular.module('brandonMcgregorApp')
.controller('WorksCtrl', ['$scope', function ($scope) {
	$scope.name = "Works";
	$scope.project_idx = 0;

	$scope.works = [
		{
			name : "This Website",
			code_location : "www.github.com/IAmBrandonMcGregor/brandon-mcgregor",
			live_location: "You're there."
		},
		{
			name : "Salespad Website",
			code_location : "Proprietary",
			live_location: "http://www.salespad.net"
		},
		{
			name : "1023 Software Website",
			code_location : "Proprietary",
			live_location : "http://www.1023software.com"
		},
		{
			name : "Brave Plastic",
			code_location : "www.github.com/IAmBrandonMcGregor/brave-plastic",
			live_location : "www.brandonmcgregor.com/BravePlastic"
		}
	];



	$scope.project_style = { width: ((100 / $scope.works.length) + "%") };


	$scope.SelectProject = function (idx) {
		$scope.project_idx = idx;
	};

}]);
