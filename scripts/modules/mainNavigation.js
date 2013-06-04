
define([
	'lib/text!../../templates/mainNavigation.html'
], function (template) {

	var mainNavigation = function (Mod, App, Backbone, Marionette, $, _) {

		// Define a view to show
		// ---------------------
		var view = new Marionette.ItemView({
			template: _.template(template)
		});

		// Define a controller to run this module
		// --------------------------------------
		var Controller = Marionette.Controller.extend({

			initialize: function (options) {
				// Set the region this will appear in.
				this.region = options.region

				// Capture a reference to the current scope.
				var self = this;

				// Watch the scroll position and update the navigation indicator accordingly.
				$('#ApplicationPage').on("scroll", this.updatePageLocationIndicator);

				// Listen for resize events and update the page breaks points.
				App.vent.on("App:Resize", this.captureNavigationBreakPoints);
			},

			updatePageLocationIndicator: function (event) {
				// Ensure we've got positions set.
				if (self.positions === undefined || self.positions === undefined)
					return false;

				// Find which navigatin link matches with the current scroll position.
				var scrollPosition = event.currentTarget.scrollTop
					,htmlToMatch = ''
					,route = '';
				if (scrollPosition < self.positions.portfolio) {
					htmlToMatch = 'About';
					route = 'About';
				}
				else if (scrollPosition >= self.positions.portfolio && scrollPosition < self.positions.findMe) {
					htmlToMatch = 'Portfolio';
					route = 'Portfolio';
				}
				else if (scrollPosition >= (self.positions.findMe)) {
					htmlToMatch = 'Find Me';
					route = 'Find-Me';
				}
				else
					return false;

				// Only update the DOM if the position has changed enough to need it.
				if ( $('#ApplicationHeader').find('li').find('a.current').html() !==  htmlToMatch) {
					// Update the CSS classes on the navigation links.
					$('#ApplicationHeader').find('li').find('a').each(function () {
						if ($(this).html() === htmlToMatch)
							$(this).addClass('current');
						else
							$(this).removeClass('current');
					});

					// Update the route.
					// NOTE! For some reason, I can't get this to not call the route function. This breaks functionality.
					App.router.navigate(route, {trigger: false, replace: true});
					return false;
				}
			},

			captureNavigationBreakPoints: function () {
				// set the amount to buffer on top of each section. Makes navigation not force such scroll precision.
				var topBuffer = 60;

				// Capture/Set the scroll break points for navigation to listen to.
				self.positions = {
					about : 0,
					portfolio : ($('#P_Portfolio').offset().top + $('#ApplicationPage').scrollTop() - parseFloat($('#ApplicationPage').css('margin-top')) - topBuffer),
					findMe : ($('#P_FindMe').offset().top + $('#ApplicationPage').scrollTop() - parseFloat($('#ApplicationPage').css('margin-top')) - topBuffer)
				}
			},

			show: function () {
				this.region.show(view);
			}
		});

		// Initialize this module when the app starts
		// ------------------------------------------
		Mod.addInitializer(function () {
			Mod.controller = new Controller({
				region: App.header
			});
			Mod.controller.show();
		});

	};

	return mainNavigation;
});