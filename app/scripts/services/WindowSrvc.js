'use strict';

angular.module('brandonMcgregorApp')
.factory('WindowSrvc', [function () {

    var WindowSrvc = {
        screen: null,
        main_page: null,
        main_navigation: null
    };

    WindowSrvc.CaptureScreenDimensions = function () {

        try {
            // capture the sceen dimensions.
            this.screen = {
                width: window.innerWidth,
                height: window.innerHeight
            };
            // capture the main navigation width.
            this.main_navigation = { width: jQuery('.main_navigation').outerWidth() };
            // calculate the main page width.
            this.main_page = { width: (this.screen.width - this.main_navigation.width) };
        }
        catch (ex) {
            // catch any errors (lack of jQuery, etc)
            console.error(ex);
            return false;
        }

        console.log(this);
        return true;
    };

    // Return the service.
    return WindowSrvc;
}]);
