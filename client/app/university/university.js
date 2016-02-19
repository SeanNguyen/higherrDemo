'use strict';

angular.module('app')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('university', {
        url: '/university/:id',
        templateUrl: 'app/university/university.html',
        controller: 'UniversityController',
        controllerAs: 'uni',
        abstract: true
      });

    $urlRouterProvider.when('/university/:id', '/university/:id/overview');
  });
