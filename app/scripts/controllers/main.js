'use strict';

angular.module('brandonMcgregorApp')
.controller('MainCtrl', ['$scope', function ($scope) {

	// A collection of professional (aka paid) projects.
	$scope.professional = [
		{ 
			name: 'Salespad.net',
			thumbnail: '../assets/salespad.png' 
		},
		{ 
			name: '1023software.com',
			thumbnail: '../assets/1023software.png' 
		},
		{ 
			name: 'Salespad Cloud',
			thumbnail: '../assets/cloud.png'
		 }
	];

	// A collection of amateur projects.
	$scope.amateur = [
		{ name: 'Web Touch Controller' }
	];


	$scope.ShowProjectDetails = function (project) {
		console.log("This should open the project '" + project.name + "'.");
	};
}]);
