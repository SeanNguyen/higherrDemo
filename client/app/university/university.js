'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('university', {
        url: '/university/:id',
        templateUrl: 'app/university/university.html',
        controller: 'UniversityController',
        controllerAs: 'uni'
      });
  });
