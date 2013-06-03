define([ 
	'jquery', 
	'underscore', 
	'backbone',
	'marionette',
	'router',
	'modules/mainNavigation',
	'modules/about',
	'modules/portfolio',
	'modules/findMe'
], function ($, _, Backbone, Marionette, Router, MainNavigation, About, Portfolio, FindMe) {

	// Create the Marionette application object.
	var App = new Marionette.Application();

	// Setup some regions within the application.
	App.addRegions({
		header : '#ApplicationHeader',
		about : '#AboutMe',
		portfolio : '#Portfolio',
		findMe : '#FindMe'
	});

	// Start the backbone history once the application has been started.
	App.on("initialize:after", function(options){

		// Set the #ApplicationPage height.
		var page_height = $(window).height() - $('#ApplicationHeader').height();
		$('#ApplicationPage').height(page_height);

		// TODO: Add a listener for re-size events, so we can recalculate the section sizes.

		// Setup the router to control our application.
		this.router = new Router();
	});

	// Add Modules.
	App.module("MainNavigation", MainNavigation);
	App.module("AboutMe", About);
	App.module("Portfolio", Portfolio);
	App.module("FindMe", FindMe);

    return App;
});