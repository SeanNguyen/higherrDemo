'use strict';

angular.module('app', [
  'app.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    // Extend the red theme with a few different colors
    var appTheme = $mdThemingProvider.extendPalette('red', {
      '500': '046B8B',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('appTheme', appTheme);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
      .primaryPalette('appTheme')

    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('appTheme')
      .dark();

    Chart.defaults.global = {
      showTooltips: false
    };
  });
