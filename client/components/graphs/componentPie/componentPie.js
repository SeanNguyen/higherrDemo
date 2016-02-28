'use-strict';

(function() {
  var app = angular.module('app');

  app.directive('graphComponentPie', function() {
    return {
      templateUrl: 'components/graphs/componentPie/componentPie.html',
      controller: ComponentPieController,
      controllerAs: 'componentPie'
    }
  });

  function ComponentPieController() {
    this.labels = ["", ""];
    this.data = [200, 800];
    this.colors = ['#1bc4f8', '#023d4f'];
  }
})();