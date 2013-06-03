
define([
	'lib/text!../../templates/mainNavigation.html'
], function (template) {

	var mainNavigation = function (Mod, App, Backbone, Marionette, $, _) {

		// Define a view to show
		// ---------------------
		var view = new Marionette.ItemView({
			template: _.template(template)
		});

		// Define a controller to run this module
		// --------------------------------------
		var Controller = Marionette.Controller.extend({

			initialize: function (options) {
				this.region = options.region

				// Watch the scroll position and update the navigation indicator accordingly.
				$('#ApplicationPage').on("scroll", function () {
					// TODO: Update the indicator on the main-navigation bar
				});
			},

			show: function () {
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