'use-strict';

(function() {
  var app = angular.module('app');

  app.directive('barRating', function() {
    return {
      restrict: 'E',
      scope: {
        ratingReadonly: '@',
        ratingInit: '@',
        ratingType: '@',
        ratingSize: '@'
      },
      templateUrl: 'components/rating/rating.html',
      controller: ['$scope', '$rootScope', '$timeout', RatingController],
      controllerAs: 'rating'
    }
  });

  function RatingController($scope, $rootScope, $timeout) {
    var self = this;
    this.size = $scope.ratingSize;
    var theme = 'bars-1to10';
    var reverse = false;
    switch($scope.ratingType) {
      case 'stars':
        theme = 'fontawesome-stars';
        break;
      case 'vertical':
        theme = 'bars-horizontal';
        reverse = true;
        break;
    }

    if(!$rootScope.ratingBarCount || $rootScope.ratingBarCount === 0)
      $rootScope.ratingBarCount = 1;
    else
      $rootScope.ratingBarCount++;
    this.id = 'ratingBar-' + $rootScope.ratingBarCount;

    $timeout(function() {
      $('#' + self.id).barrating({
        theme: theme,
        initialRating: $scope.ratingInit,
        readonly: $scope.ratingReadonly,
        reverse: reverse,
        showSelectedRating: false
      });
      $('#' + self.id).barrating('show');  
    }, true)
  }
})();