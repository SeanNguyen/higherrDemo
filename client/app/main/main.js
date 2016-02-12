'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/:search',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
