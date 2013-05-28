define([ 
	'jquery', 
	'underscore', 
	'backbone',
	'marionette'
], function ($, _, Backbone, Marionette) {

	var App = new Marionette.Application();

	App.addRegions({
		"applicationRoot" : "#ApplicationRoot"
	});

    return App;
});