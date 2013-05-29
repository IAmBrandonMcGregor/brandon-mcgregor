define([ 
	'jquery', 
	'underscore', 
	'backbone',
	'marionette',
	'modules/aboutMe'
], function ($, _, Backbone, Marionette, AboutMe) {

	// Create the Marionette application object.
	var App = new Marionette.Application();

	// Setup some regions within the application.
	App.addRegions({
		header : '#ApplicationHeader',
		page : '#ApplicationPage'
	});

	// Start the backbone history once the application has been started.
	App.on("initialize:after", function(options){
		if (Backbone.history){
			Backbone.history.start();
		}
	});

	App.module("WillThisWork?", AboutMe);

    return App;
});