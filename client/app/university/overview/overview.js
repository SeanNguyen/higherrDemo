'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('university.overview', {
        url: '/overview',
        templateUrl: 'app/university/overview/overview.html',
        controller: 'UniversityOverviewController',
        controllerAs: 'uniOverview'
      });
  });
