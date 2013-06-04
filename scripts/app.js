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
		about : '#P_About',
		portfolio : '#P_Portfolio',
		findMe : '#P_FindMe'
	});

	// Start the backbone history once the application has been started.
	App.on("initialize:after", function(options){
		// Capture the current scope.
		var self = this;

		// Setup the appliation proportions.
		this.resize();
		// Make sure we resize when necessary.
		$(window).on("resize", function () { self.resize(); });

		// Setup the router to control our application.
		this.router = new Router({ vent: this.vent });
	});

	App.resize = function () {
		var page_height = $(window).height() - $('#ApplicationHeader').height();
		$('#ApplicationPage').height(page_height);
		this.vent.trigger("App:Resize");
	};

	// Add Modules.
	App.module("MainNavigation", MainNavigation);
	App.module("AboutMe", About);
	App.module("Portfolio", Portfolio);
	App.module("FindMe", FindMe);

    return App;
});