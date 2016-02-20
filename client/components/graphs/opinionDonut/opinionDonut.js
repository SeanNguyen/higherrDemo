'use-strict';

(function() {
  var app = angular.module('app');

  app.directive('graphOpinionDonut', function() {
    return {
      templateUrl: 'components/graphs/opinionDonut/opinionDonut.html',
      controller: OpinionDonutController,
      controllerAs: 'opinionDonut'
    }
  });

  function OpinionDonutController() {
    this.labels = ["", "", ""];
    this.data = [300, 500, 100];
  }
})();