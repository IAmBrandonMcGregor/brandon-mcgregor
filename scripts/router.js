
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
			this.scrollTo('#Portfolio');
		},
		findMe : function () {
			this.scrollTo('#FindMe');
		},

		scrollTo : function (selector) {
			var yAmount = $(selector).offset().top + $('#ApplicationPage').scrollTop() - parseFloat($('#ApplicationPage').css('margin-top')) + 1;
			$("#ApplicationPage").animate({ scrollTop : yAmount }, 'slow');
		}
	});

	return Router;
});