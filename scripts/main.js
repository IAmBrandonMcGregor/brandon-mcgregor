
// Configure require.js
require.config({
    paths : {
        backbone : 'lib/backbone',
        underscore : 'lib/underscore',
        jquery : 'lib/jquery',
        marionette : 'lib/backbone.marionette'
    },
    shim : {
        jquery : {
            exports : 'jQuery'
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        },
        marionette : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        }
    }
});

// Perform application initializations.
require([
	'jquery',
	'app'
], function ($, App) {
	$(function () {
		App.start();
	});
});