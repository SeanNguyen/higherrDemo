'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('university.life', {
        url: '/life',
        templateUrl: 'app/university/life/life.html',
        controller: 'UniversityLifeController',
        controllerAs: 'uniLife'
      });
  });
