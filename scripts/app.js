define([ 
	'jquery', 
	'underscore', 
	'backbone',
	'marionette'
], function ($, _, Backbone, Marionette) {

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

    return App;
});