
define([
	'lib/text!../../templates/portfolio_base.html'
], function (template_base) {
	
	var portfolio = function (Mod, App, Backbone, Marionette, $, _) {

		// Define a view to show
		// ---------------------
		var view = new Marionette.ItemView({
			template: _.template(template_base)
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
				region: App.portfolio
			});
			Mod.controller.show();
		});
		
	};

	return portfolio;
});