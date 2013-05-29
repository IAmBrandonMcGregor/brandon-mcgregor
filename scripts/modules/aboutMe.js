
define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'app'
], function ($, _, Backbone, Marionette, App) {

	var AboutMe = function (Mod, App, Backbone, Marionette, $, _) {
		console.log("QWERASDFZXCV");
		var is_this_working = _.isUndefined(App) ? "No" : "Yes";
		console.log("Is this working ? --> " + is_this_working);
	};

	return AboutMe;
});