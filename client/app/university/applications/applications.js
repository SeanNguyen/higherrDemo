'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('university.applications', {
        url: '/applications',
        templateUrl: 'app/university/applications/applications.html',
        controller: 'UniversityApplicationsController',
        controllerAs: 'uniApplications'
      });
  });
