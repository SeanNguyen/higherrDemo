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

  function OpinionDonutController($rootScope, $timeout) {
    var self = this;
    if($rootScope.opinionDonutCount == undefined)
      $rootScope.opinionDonutCount = 0;
    else
      $rootScope.opinionDonutCount++;

    this.id = 'opinionDonut-' + $rootScope.opinionDonutCount;

    var data = [
                  {
                      value: 300,
                      color:"#333",
                      highlight: "#666",
                      label: "Accepted"
                  },
                  {
                      value: 500,
                      color: "#333",
                      highlight: "#666",
                      label: "Rejected"
                  }
              ];
    var options = {};

    $timeout(function() {
      var ctx = $("#" + self.id).get(0).getContext("2d");
      var opportunitiesChart = new Chart(ctx).Doughnut(data, options);
    }, true);
  }
})();