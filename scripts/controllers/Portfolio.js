'use strict';

angular.module('brandonMcgregorApp')
.controller('PortfolioCtrl', ['$scope', function ($scope) {

	// Keep an eyeon where the project-list is positioned.
	$scope.project_list_position = {x:0,y:0};
	$scope.current_project_idx = 0;

	// Create our list of projects.
	$scope.projects = [
		{
			name : 'Salespad Website',
			description : 'A CMS (Kentico) based website for salespad.',
			description_long : "While working in-house at SalesPad, I re-built Salespad's official website. I worked with a few page designs from their grpahic designer and collaborated on all the existing pages, providing feedback on page requirements, navigation, and user experience.  This website is and was being used for live customer support, so maintaining existing documentation URLs was a necessity.",
			source_code_url : null,
			live_url : 'http://www.salespad.net',
			background_image_url : 'images/salespad.png',
			open : false
		},
		{
			name : '1023 Software Website',
			description : 'A CMS (Kentico) based website for 1023 Software.',
			description_long : "This was my first CMS website while working in-house at SalesPad. Working from images from the in-house designer, I constructed pages, CMS templates, objects, and rules that allowed for easy addition or updating of specified page portions and elements.",
			source_code_url : null,
			live_url : 'http://www.1023software.com',
			background_image_url : 'images/1023software.png',
			open : false
		},
		{
			name : 'Brave Plastic',
			description : 'An experiment to see how fast web sockets could transfer touch data.',
			description_long : "I originally thought of this experiment while thinking of a web based game concept where the user controlled their character using their phone as a controller. I wanted to test how efficiently a socket could communicate information from their 'controller' in real time. The results are very promising.",
			source_code_url : 'https://github.com/IAmBrandonMcGregor/Brave-Plastic',
			live_url : 'http://www.brandonmcgregor.com/Brave-Plastic/#/',
			background_image_url : 'images/brave_plastic.png',
			open : false
		}
	],

	// Depending on project's code availability, provide the proper SVG icon.
	$scope.GetCodeSVG = function (project) {
		if (project.source_code_url === null) {
			return "M16,3.667C9.189,3.667,3.667,9.188,3.667,16S9.189,28.333,16,28.333c6.812,0,12.333-5.521,12.333-12.333S22.812,3.667,16,3.667zM16,6.667c1.851,0,3.572,0.548,5.024,1.48L8.147,21.024c-0.933-1.452-1.48-3.174-1.48-5.024C6.667,10.854,10.854,6.667,16,6.667zM16,25.333c-1.85,0-3.572-0.548-5.024-1.48l12.876-12.877c0.933,1.452,1.48,3.174,1.48,5.024C25.333,21.146,21.146,25.333,16,25.333z";
		}
		else {
			return "M28.436,15.099c-1.201-0.202-2.451-0.335-3.466-0.371l-0.179-0.006c0.041-0.09,0.072-0.151,0.082-0.16c0.022-0.018,0.04-0.094,0.042-0.168c0-0.041,0.018-0.174,0.046-0.35c0.275,0.01,0.64,0.018,1.038,0.021c1.537,0.012,3.145,0.136,4.248,0.331c0.657,0.116,0.874,0.112,0.389-0.006c-0.491-0.119-1.947-0.294-3.107-0.37c-0.779-0.053-1.896-0.073-2.554-0.062c0.019-0.114,0.041-0.241,0.064-0.371c0.093-0.503,0.124-1.009,0.126-2.016c0.002-1.562-0.082-1.992-0.591-3.025c-0.207-0.422-0.441-0.78-0.724-1.104c0.247-0.729,0.241-1.858-0.015-2.848c-0.211-0.812-0.285-0.864-1.021-0.708C22.19,4.019,21.69,4.2,21.049,4.523c-0.303,0.153-0.721,0.391-1.024,0.578c-0.79-0.278-1.607-0.462-2.479-0.561c-0.884-0.1-3.051-0.044-3.82,0.098c-0.752,0.139-1.429,0.309-2.042,0.511c-0.306-0.189-0.75-0.444-1.067-0.604C9.973,4.221,9.473,4.041,8.847,3.908c-0.734-0.157-0.81-0.104-1.02,0.708c-0.26,1.003-0.262,2.151-0.005,2.878C7.852,7.577,7.87,7.636,7.877,7.682c-1.042,1.312-1.382,2.78-1.156,4.829c0.059,0.534,0.15,1.024,0.277,1.473c-0.665-0.004-1.611,0.02-2.294,0.064c-1.162,0.077-2.618,0.25-3.109,0.369c-0.484,0.118-0.269,0.122,0.389,0.007c1.103-0.194,2.712-0.32,4.248-0.331c0.29-0.001,0.561-0.007,0.794-0.013c0.07,0.237,0.15,0.463,0.241,0.678L7.26,14.759c-1.015,0.035-2.264,0.168-3.465,0.37c-0.901,0.151-2.231,0.453-2.386,0.54c-0.163,0.091-0.03,0.071,0.668-0.106c1.273-0.322,2.928-0.569,4.978-0.741l0.229-0.02c0.44,1.022,1.118,1.802,2.076,2.41c0.586,0.373,1.525,0.756,1.998,0.816c0.13,0.016,0.508,0.094,0.84,0.172c0.333,0.078,0.984,0.195,1.446,0.262h0.011c-0.009,0.006-0.017,0.01-0.025,0.016c-0.56,0.291-0.924,0.744-1.169,1.457c-0.11,0.033-0.247,0.078-0.395,0.129c-0.529,0.18-0.735,0.217-1.271,0.221c-0.556,0.004-0.688-0.02-1.02-0.176c-0.483-0.225-0.933-0.639-1.233-1.133c-0.501-0.826-1.367-1.41-2.089-1.41c-0.617,0-0.734,0.25-0.288,0.615c0.672,0.549,1.174,1.109,1.38,1.537c0.116,0.24,0.294,0.611,0.397,0.824c0.109,0.227,0.342,0.535,0.564,0.748c0.522,0.498,1.026,0.736,1.778,0.848c0.504,0.074,0.628,0.074,1.223-0.002c0.287-0.035,0.529-0.076,0.746-0.127c0,0.244,0,0.525,0,0.855c0,1.766-0.021,2.334-0.091,2.5c-0.132,0.316-0.428,0.641-0.716,0.787c-0.287,0.146-0.376,0.307-0.255,0.455c0.067,0.08,0.196,0.094,0.629,0.066c0.822-0.051,1.403-0.355,1.699-0.891c0.095-0.172,0.117-0.518,0.147-2.318c0.032-1.953,0.046-2.141,0.173-2.42c0.077-0.166,0.188-0.346,0.25-0.395c0.104-0.086,0.111,0.084,0.111,2.42c-0.001,2.578-0.027,2.889-0.285,3.385c-0.058,0.113-0.168,0.26-0.245,0.33c-0.135,0.123-0.192,0.438-0.098,0.533c0.155,0.154,0.932-0.088,1.356-0.422c0.722-0.572,0.808-1.045,0.814-4.461l0.003-2.004l0.219,0.021l0.219,0.02l0.036,2.621c0.041,2.951,0.047,2.994,0.549,3.564c0.285,0.322,0.572,0.5,1.039,0.639c0.625,0.188,0.813-0.102,0.393-0.605c-0.457-0.547-0.479-0.756-0.454-3.994c0.017-2.076,0.017-2.076,0.151-1.955c0.282,0.256,0.336,0.676,0.336,2.623c0,2.418,0.069,2.648,0.923,3.07c0.399,0.195,0.511,0.219,1.022,0.221c0.544,0.002,0.577-0.006,0.597-0.148c0.017-0.115-0.05-0.193-0.304-0.348c-0.333-0.205-0.564-0.467-0.709-0.797c-0.055-0.127-0.092-0.959-0.117-2.672c-0.036-2.393-0.044-2.502-0.193-2.877c-0.201-0.504-0.508-0.902-0.897-1.166c-0.101-0.066-0.202-0.121-0.333-0.162c0.161-0.016,0.317-0.033,0.468-0.055c1.572-0.209,2.403-0.383,3.07-0.641c1.411-0.543,2.365-1.445,2.882-2.724c0.046-0.114,0.092-0.222,0.131-0.309l0.398,0.033c2.051,0.173,3.706,0.42,4.979,0.743c0.698,0.177,0.831,0.198,0.668,0.105C30.666,15.551,29.336,15.25,28.436,15.099zM22.422,15.068c-0.233,0.512-0.883,1.17-1.408,1.428c-0.518,0.256-1.33,0.451-2.25,0.544c-0.629,0.064-4.137,0.083-4.716,0.026c-1.917-0.188-2.991-0.557-3.783-1.296c-0.75-0.702-1.1-1.655-1.039-2.828c0.039-0.734,0.216-1.195,0.679-1.755c0.421-0.51,0.864-0.825,1.386-0.985c0.437-0.134,1.778-0.146,3.581-0.03c0.797,0.051,1.456,0.051,2.252,0c1.886-0.119,3.145-0.106,3.61,0.038c0.731,0.226,1.397,0.834,1.797,1.644c0.18,0.362,0.215,0.516,0.241,1.075C22.808,13.699,22.675,14.517,22.422,15.068zM12.912,11.762c-1.073-0.188-1.686,1.649-0.863,2.587c0.391,0.445,0.738,0.518,1.172,0.248c0.402-0.251,0.62-0.72,0.62-1.328C13.841,12.458,13.472,11.862,12.912,11.762zM19.425,11.872c-1.073-0.188-1.687,1.647-0.864,2.586c0.392,0.445,0.738,0.519,1.173,0.247c0.401-0.25,0.62-0.72,0.62-1.328C20.354,12.569,19.985,11.971,19.425,11.872zM16.539,15.484c-0.023,0.074-0.135,0.184-0.248,0.243c-0.286,0.147-0.492,0.096-0.794-0.179c-0.187-0.169-0.272-0.258-0.329-0.081c-0.053,0.164,0.28,0.493,0.537,0.594c0.236,0.094,0.405,0.097,0.661-0.01c0.254-0.106,0.476-0.391,0.476-0.576C16.842,15.303,16.595,15.311,16.539,15.484zM16.222,14.909c0.163-0.144,0.2-0.44,0.044-0.597s-0.473-0.133-0.597,0.043c-0.144,0.206-0.067,0.363,0.036,0.53C15.865,15.009,16.08,15.034,16.222,14.909z";
		}
	};

	$scope.ToggleProjectOpen = function (project) {
		project.open = (project.open) ? false : true;
	};

	$scope.GetSourceHref = function (project) {
		if (project.source_code_url === null || angular.isUndefined(project.source_code_url))
			return "";
		else
			return project.source_code_url;
	};

	$scope.GetLiveHref = function (project) {
		if (project.live_url === null || angular.isUndefined(project.live_url))
			return "";
		else
			return project.live_url;
	};

	$scope.ScrollToProject = function (idx) {
		var over_width = jQuery('.projects-wrapper').outerWidth();
		var under_width = $scope.projects.length * 800;
		var total_available_scroll_space = under_width - over_width;
		var break_width = total_available_scroll_space / $scope.projects.length;

		var scroll_to = 0;
		if (idx !== 0) {
			if (idx === ($scope.projects.length - 1))
				scroll_to = under_width;
			else {
				var ns = ((800 * idx) - 150);
				if (ns <= (break_width*(idx+1)))
					scroll_to = ns;
				else
					scroll_to = (break_width*idx) + 5;
			}
		}


		jQuery('.projects-wrapper').animate({
			scrollLeft : scroll_to
		}, 400);
	};


	// Listen for updates to the scroll position.
	$scope.$on('Project-Wrapper-Scroll', function (event, WindowSrvc) {
		var over_width = jQuery('.projects-wrapper').outerWidth();
		var under_width = $scope.projects.length * 800;
		var total_available_scroll_space = under_width - over_width;
		var break_width = total_available_scroll_space / $scope.projects.length;
		var new_idx = $scope.current_project_idx;

		for (var i=0,l=$scope.projects.length; i<l; i++) {
			if (WindowSrvc.positions.project_list.x <= ((i+1) * break_width)){
				new_idx = i;
				break;
			}
		}
		if ($scope.current_project_idx !== new_idx) {
			$scope.current_project_idx = new_idx;
			$scope.$apply();
		}
	});
}]);
