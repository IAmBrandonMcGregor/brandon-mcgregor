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
    'underscore',
    'backbone',
    'marionette'
], 

function ($, _, Backbone, Marionette) {
	$(function () { 
        
        console.log("NON AMD Utilized.");

        var App = Marionette.Application();

	});
});