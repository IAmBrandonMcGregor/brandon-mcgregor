
define([
	'views/mainNavigation'
], function (MainNavigationView) {

	var mainNavigation = function (Mod, App, Backbone, Marionette, $, _) {

		// Define a view to show
		// ---------------------
		//var NavigationView = MainNavigationView;

		// Define a controller to run this module
		// --------------------------------------
		var Controller = Marionette.Controller.extend({

			initialize: function (options) {
				this.region = options.region

				// TODO: Add a scroll listener to control which navigation link is marked .current.
			},

			show: function () {

				// var model = new Backbone.Model({
				// 	words: "Hamburger!"
				// });

				var view = new MainNavigationView({
					//model: model
				});

				this.region.show(view);
			}
		});

		// Initialize this module when the app starts
		// ------------------------------------------
		Mod.addInitializer(function () {
			Mod.controller = new Controller({
				region: App.header
			});
			Mod.controller.show();
		});

	};

	return mainNavigation;
});