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
    var theme = $mdThemingProvider.extendPalette('red', {
      '500': '046B8B',
      'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('theme', theme);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
      .primaryPalette('theme')

  });
