'use strict';

angular.module('brandonMcgregorApp')
.factory('WindowSrvc', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    var WindowSrvc = {
        screen: null,
        main_page: null,
        main_navigation: null,
        scroll_position: null
    };

    WindowSrvc.CaptureScreenDimensions = function () {

        try {
            // capture the sceen dimensions.
            this.screen = {
                width: jQuery('.application_wrapper').innerWidth(),
                height: jQuery('.application_wrapper').innerHeight() };
            // capture the main navigation width.
            this.main_navigation = { 
                width: jQuery('.main_navigation').outerWidth(),
                height: this.screen.height };
            // calculate the main page width.
            this.main_page = { 
                width: (this.screen.width - this.main_navigation.width),
                height: this.screen.height };
        }
        catch (ex) {
            // catch any errors (lack of jQuery, etc)
            console.error(ex);
            return false;
        }

        return true;
    };



    // Set a listener to fire up this service on a callback loop.
    jQuery(window).ready(function () {
        // Take an initial capture of the screen's dimensions.
        WindowSrvc.CaptureScreenDimensions();

        // Add an event listener for RESIZE events.
        jQuery(window).resize(function (event) {
            WindowSrvc.CaptureScreenDimensions();
            $rootScope.$broadcast('ScreenResize', WindowSrvc);

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
