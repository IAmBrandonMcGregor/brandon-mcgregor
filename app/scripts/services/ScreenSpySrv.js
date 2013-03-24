'use strict';

angular.module('brandonMcgregorApp')
.factory('ScreenSpySrv', [function () {

    var ScreenSpySrv = {};

    ScreenSpySrv.CaptureScreenSize = function () {
        this.screen_sizes = {
            x: window.innerWidth,
            y: window.innerHeight
        };
    };

    ScreenSpySrv.GetReducedWindowHeight = function (arrayOfReductions) {
        // Ensure that we've received an array.
        if (angular.isUndefined(arrayOfReductions) || !angular.isArray(arrayOfReductions))
            return console.warn("ScreenSpySrv.GetReducedWindowHeight -- Bad Request.");
        
        // Add each element in the array to get and return the reduced height.
        var reducedHeight = this.screen_sizes.y;
        for (var i=0, l=arrayOfReductions.length; i<l; i++) {
            reducedHeight -= arrayOfReductions[i];
        }
        return reducedHeight;
    };

    ScreenSpySrv.GetSectionHeights = function () {
        // Ensure we've got the current screen size.
        this.CaptureScreenSize();
        // DOM traverse to read the set heights.
        this.sections = {
            // main_nav: document.getElementById("MainNavigation").offsetHeight,
            // sub_nav: document.getElementById("SubNavigation").offsetHeight
            main_nav: 0,
            sub_nav: 0
        };
        // Calculate and set the main area height.
        this.sections.main = this.GetReducedWindowHeight(
            [this.sections.main_nav, this.sections.sub_nav] );

        return this.sections;
    };


    // Initialize the heights.
    ScreenSpySrv.GetSectionHeights();

    // Add a listener to update the Section Heights whenever resized.
    // window.addEventListener('resize', function () {
    //     ScreenSpySrv.GetSectionHeights();
    // }.bind(ScreenSpySrv), false);

    // Return the service.
    return ScreenSpySrv;
}]);
