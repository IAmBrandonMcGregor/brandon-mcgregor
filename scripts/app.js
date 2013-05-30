define([ 
	'jquery', 
	'underscore', 
	'backbone',
	'marionette',
	'modules/mainNavigation',
	'modules/about',
	'modules/portfolio',
	'modules/findMe'
], function ($, _, Backbone, Marionette, MainNavigation, About, Portfolio, FindMe) {

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

		// Start the backbone history module.
		if (Backbone.history){
			Backbone.history.start();
		}
	});

	// Add Modules.
	App.module("MainNavigation", MainNavigation);
	App.module("AboutMe", About);
	App.module("Portfolio", Portfolio);
	App.module("FindMe", FindMe);

    return App;
});