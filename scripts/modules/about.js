
define([
	'lib/text!../../templates/about.html'
], function (template) {

	var about = function (Mod, App, Backbone, Marionette, $, _) {

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
			},

			show: function () {

				// var model = new Backbone.Model({
				// 	words: "Hamburger!"
				// });

				// var view = new MainNavigationView({
				// 	//model: model
				// });

				this.region.show(view);
			}
		});

		// Initialize this module when the app starts
		// ------------------------------------------
		Mod.addInitializer(function () {
			Mod.controller = new Controller({
				region: App.about
			});
			Mod.controller.show();
		});

	};

	return about;
});