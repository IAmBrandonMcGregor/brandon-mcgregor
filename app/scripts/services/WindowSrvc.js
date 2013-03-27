'use strict';

angular.module('brandonMcgregorApp')
.factory('WindowSrvc', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    var WindowSrvc = {
        dimensions : {
            screen : {
                width : 0,
                height : 0
            },
            header : {
                width : 0,
                height : 0
            }
        }
    };

    WindowSrvc.CaptureScreenDimensions = function () {

        // Screen / Window.
        this.dimensions.screen.width = jQuery(window).innerWidth();
        this.dimensions.screen.height = jQuery(window).innerHeight();

        // Header.
        var jq_header = jQuery('#MainHeader');
        this.dimensions.header.width = jq_header.outerWidth();
        this.dimensions.header.height = jq_header.outerHeight();
    };



    // Set a listener to fire up this service on a callback loop.
    jQuery(window).ready(function () {
        // Take an initial capture of the screen's dimensions.
        WindowSrvc.CaptureScreenDimensions();

        // Add an event listener for RESIZE events.
        jQuery(window).resize(function (event) {
            WindowSrvc.CaptureScreenDimensions();
            $rootScope.$broadcast('Resize', WindowSrvc);

        }.bind(WindowSrvc));

        // Add an event listener for SCROLL events.
        jQuery(window).scroll(function () {
            WindowSrvc.scroll_position = jQuery(window).scrollTop();
            $rootScope.$broadcast('Scroll', WindowSrvc);
        });

    }.bind(WindowSrvc));

    // Return the service.
    return WindowSrvc;
}]);
