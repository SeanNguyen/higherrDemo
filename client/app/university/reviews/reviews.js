'use strict';

angular.module('app')
  .config(function($stateProvider) {
    $stateProvider
      .state('university.reviews', {
        url: '/reviews',
        templateUrl: 'app/university/reviews/reviews.html',
        controller: 'UniversityReviewsController',
        controllerAs: 'uniReviews'
      });
  });
