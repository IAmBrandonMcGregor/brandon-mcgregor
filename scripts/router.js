
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette'
], function ($, _, Backbone, Marionette) {
	var Router = Backbone.Router.extend({

		initialize : function (options) {
			// Capture the current scope.
			var self = this;

			// Ensure we know where the different application sections are located.
			this.captureLocals();
			options.vent.on("App:Resize", function () { self.captureLocals(); });

			// Start the backbone history module.
			if (Backbone.history)
				Backbone.history.start();
		},

		routes : {
			"About" : "defaultRoute",
			"Portfolio" : "portfolio",
			"Find-Me" : "findMe",
			'*path' : 'defaultRoute'
		},
		
		defaultRoute : function () { this.scrollTo(this.locals.about); },
		portfolio : function () { this.scrollTo(this.locals.portfolio); },
		findMe : function () { this.scrollTo(this.locals.findMe); },

		captureLocals : function () {
			this.locals = {
				about : 0,
				portfolio : ($('#P_Portfolio').offset().top + $('#ApplicationPage').scrollTop() - parseFloat($('#ApplicationPage').css('margin-top')) + 1),
				findMe : ($('#P_FindMe').offset().top + $('#ApplicationPage').scrollTop() - parseFloat($('#ApplicationPage').css('margin-top')) + 1)
			};
		},
		scrollTo : function (location) {
			$("#ApplicationPage").animate({ scrollTop : location }, 'slow');
		}
	});

	return Router;
});