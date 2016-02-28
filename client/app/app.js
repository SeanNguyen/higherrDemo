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

    $mdThemingProvider.definePalette('appTheme', {
      '50': '#9ce5fc',
      '100': '#52d2fa',
      '200': '#1bc4f8',
      '300': '#0699c6',
      '400': '#0582a9',
      '500': '#046b8b',
      '600': '#03546d',
      '700': '#023d4f',
      '800': '#012632',
      '900': '#010f14',
      'A100': '#00C853',
      'A200': '#00C853',
      'A400': '#00C853',
      'A700': '#00C853',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    });

    $mdThemingProvider.definePalette('appTheme', {
       '50': '#f3fae9',
  '100': '#d2ecab',
  '200': '#bae27d',
  '300': '#9bd543',
  '400': '#8dcb2e',
  '500': '#7cb228',
  '600': '#6b9922',
  '700': '#59801d',
  '800': '#486717',
  '900': '#364e12',
      'A100': '#00C853',
      'A200': '#00C853',
      'A400': '#00C853',
      'A700': '#00C853',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    });

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