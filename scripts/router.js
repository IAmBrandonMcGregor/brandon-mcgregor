
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette'
], function ($, _, Backbone, Marionette) {
	var Router = Backbone.Marionette.AppRouter.extend({

		initialize : function () {
			if (Backbone.history)
				Backbone.history.start();
		},

		routes : {
			"About" : "defaultRoute",
			"Portfolio" : "portfolio",
			"Find-Me" : "findMe",
			'*path' : 'defaultRoute'
		},
		
		defaultRoute : function () {
			console.log("The default route has been hit.");
			$('#ApplicationPage').animate({ scrollTop: 0 }, "slow");
		},
		portfolio : function () {
			console.log("TODO: Navigate to the Portfolio section.");
		},
		findMe : function () {
			console.log("TODO: Navigate to the Find-Me section.");
		}
	});

	return Router;
});