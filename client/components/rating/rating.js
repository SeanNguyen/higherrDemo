'use-strict';

(function() {
  var app = angular.module('app');

  app.directive('barRating', function() {
    return {
      restrict: 'E',
      scope: {
        ratingReadonly: '@',
        ratingInit: '@',
        ratingType: '@'
      },
      templateUrl: 'components/rating/rating.html',
      controller: ['$scope', RatingController],
      controllerAs: 'rating'
    }
  });

  function RatingController($scope) {
    var theme = 'fontawesome-stars';
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
    $('#example').barrating({
      theme: theme,
      initialRating: $scope.ratingInit,
      readonly: $scope.ratingReadonly,
      reverse: reverse,
      showSelectedRating: false
    });
    $('#example').barrating('show');
  }
})();