'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', function ($scope) {

	// A collection of professional (aka paid) projects.
	$scope.professional = [
		{ name: 'Salespad.net' },
		{ name: '1023software.com' },
		{ name: 'Salespad Cloud' }
	];

	// A collection of amateur projects.
	$scope.amateur = [
		{ name: 'Web Touch Controller' }
	];


	$scope.ShowProjectDetails = function (project) {
		console.log("This should open the project '" + project.name + "'.");
	};
}]);
