'use strict';

angular.module('brandonMcgregorApp')
.factory('WindowSrvc', ['$rootScope', '$timeout', '$location', function ($rootScope, $timeout, $location) {

    var WindowSrvc = {
        dimensions : {
            screen : {
                width : 0,
                height : 0
            },
            header : {
                width : 0,
                height : 0
            },
            navigable_section : {
                width : 0,
                height : 0
            }
        },
        positions : {
            screen : {
                x : 0,
                y : 0
            },
            project_list : {
                x : 0,
                y : 0
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

        // Navigable Section(s).
        var jq_navSec = jQuery('.navigable_section').first();
        this.dimensions.navigable_section.width = jq_navSec.outerWidth();
        this.dimensions.navigable_section.height = jq_navSec.outerHeight();
    };

    WindowSrvc.GoTo = function (parameters) {
        if (angular.isUndefined(parameters))
            parameters = {};

        // Capture the section from the URL.
        var section = '', 
            idx = 0;
        angular.forEach($location.search(), function (value, key) {
            section = key.replace('-', ' ');
        }.bind(section));

        // Capture the index of the section.
        for (var i=0, l=$rootScope.sections.length; i<l; i++) {
            if ($rootScope.sections[i].name === section) {
                idx = i;
                break;
            }
        }

        // Use jQuery to scroll to that section.
        var jqSelector = ('#' + section.replace(' ', ''));
        if (parameters.suppressAnimation !== true) {
            jQuery('#Page').animate({
                scrollTop: (idx * this.dimensions.navigable_section.height)
            }, 800);
        }
        else {
            jQuery('#Page').scrollTop(idx * this.dimensions.navigable_section.height);
        }
    };

    WindowSrvc.Init = function () {
        // Take an initial reading of the screen layout.
        this.CaptureScreenDimensions();

        // Add an event listener for RESIZE events.
        jQuery(window).resize(function (event) {
            WindowSrvc.CaptureScreenDimensions();
            $rootScope.$broadcast('Resize', WindowSrvc);

        }.bind(WindowSrvc));

        // Add an event listener for SCROLL events.
        jQuery('#Page').scroll(function () {
            WindowSrvc.positions.screen.x = jQuery('#Page').scrollLeft();
            WindowSrvc.positions.screen.y = jQuery('#Page').scrollTop();
            $rootScope.$broadcast('Scroll', WindowSrvc);
        });

        // Add an event listener for the 'list-of-projects' position.
        jQuery('.projects-wrapper').scroll(function () {
            WindowSrvc.positions.project_list.x = jQuery(this).scrollLeft();
            WindowSrvc.positions.project_list.y = jQuery(this).scrollTop();
            // broadcast via Root Scope.
            $rootScope.$broadcast('Project-Wrapper-Scroll', WindowSrvc);
        });
    };

    // Return the service.
    return WindowSrvc;
}]);
