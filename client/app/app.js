'use strict';

var app = angular.module('app', [
  'app.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial',
  'chart.js'
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
  });


app.directive('focusMe', function($timeout) {
  return {
    scope: { trigger: '=focusMe' },
    link: function(scope, element) {
      scope.$watch('trigger', function(value) {
        if(value === true) { 
          $timeout(function() {
            element[0].focus(); 
          });
        }
      });
    }
  };
});

app.directive("outsideClick", ['$document','$parse', function( $document, $parse ){
    return {
        link: function( $scope, $element, $attributes ){
            var scopeExpression = $attributes.outsideClick,
                onDocumentClick = function(event){
                    var isChild = $element.find(event.target).length > 0;

                    if(!isChild) {
                        $scope.$apply(scopeExpression);
                    }
                };

            $document.on("click", onDocumentClick);

            $element.on('$destroy', function() {
                $document.off("click", onDocumentClick);
            });
        }
    }
}]);