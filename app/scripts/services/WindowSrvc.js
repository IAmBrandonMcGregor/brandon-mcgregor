'use strict';

angular.module('brandonMcgregorApp')
.factory('WindowSrvc', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    var WindowSrvc = {
        screen: null,
        main_page: null,
        main_navigation: null
    };


    WindowSrvc.IsUpdated = function () {
        console.log("WindowSrvc.IsUpdated()...");
        return WindowSrvc.screen.width;
    };




    WindowSrvc.CaptureScreenDimensions = function () {

        try {
            // capture the sceen dimensions.
            this.screen = {
                width: jQuery('.application_wrapper').innerWidth(),
                height: jQuery('.application_wrapper').innerHeight()
            };
            // capture the main navigation width.
            this.main_navigation = { width: jQuery('.main_navigation').outerWidth() };
            // calculate the main page width.
            this.main_page = { width: (this.screen.width - this.main_navigation.width) };

            // start a cooldown clock.
            this.CoolDown = true;
            $timeout(function () {
                this.CoolDown = false;
            }.bind(this), 100);

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
        WindowSrvc.CaptureScreenDimensions();
        jQuery(window).resize(function (event) {

            if (WindowSrvc.CoolDown === true)
                return;

            WindowSrvc.CaptureScreenDimensions();
            $rootScope.$broadcast('ScreenResize', WindowSrvc);
            //console.log("The WindowSrvc just listened to 'resize'.");

        }.bind(WindowSrvc));
    }.bind(WindowSrvc));

    // Return the service.
    return WindowSrvc;
}]);
