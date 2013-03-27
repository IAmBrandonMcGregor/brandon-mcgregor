'use strict';

angular.module('brandonMcgregorApp')
.controller('PortfolioCtrl', ['$scope', function ($scope) {
	// Do some awesome stuff.
	$scope.projects = [
		{
			name : 'Brave Plastic',
			description : 'An experiment to see how fast web sockets could transfer touch data.',
			source_code_url : 'http://www.google.com'
		},
		{
			name : 'Salespad Website',
			description : 'A CMS (Kentico) based website for salespad.',
			source_code_url: null
		}
	]
}]);
