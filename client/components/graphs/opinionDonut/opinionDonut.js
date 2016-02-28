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
    this.colors = ['#012632', '#046b8b', '#1bc4f8']
  }
})();