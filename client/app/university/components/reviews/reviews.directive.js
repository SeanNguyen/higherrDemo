'use strict';

angular.module('app')
  .directive('reviews', () => ({
    scope: {
      reviewsType: '@'
    },
    templateUrl: 'app/university/components/reviews/reviews.html',
    restrict: 'E',
    controller: 'ReviewController',
    controllerAs: 'reviews'
  }));
