
define([
	'lib/text!../../templates/findMe.html'
], function (template) {
	
	var findMe = function (Mod, App, Backbone, Marionette, $, _) {
		
		// Define a view to show
		// ---------------------
		var view = new Marionette.ItemView({
			template: _.template(template)
		});

		// Define a controller to run this module
		// --------------------------------------
		var Controller = Marionette.Controller.extend({
			initialize: function (options) {
				this.region = options.region;
			},
			show: function () {
				this.region.show(view);
			}
		});

		// Initialize this module when the app starts
		// ------------------------------------------
		Mod.addInitializer(function () {
			Mod.controller = new Controller({
				region: App.findMe
			});
			Mod.controller.show();
		});
	};

	return findMe;
});