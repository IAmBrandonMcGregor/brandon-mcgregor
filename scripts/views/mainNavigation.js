
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'lib/text!../../templates/mainNavigation.html'
], function ($, _, Backbone, Marionette, template) {

	var mainNavigation = Marionette.ItemView.extend({
		template: _.template(template)
	});

	return mainNavigation;
});