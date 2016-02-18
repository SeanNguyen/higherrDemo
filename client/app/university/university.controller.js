'use strict';

(function() {

angular.module('app')
  .controller('UniversityController', ['$stateParams', '$timeout', UniversityController]);

function UniversityController($stateParams, $timeout) {

  this.init = function() {
  }

  this.initCharts = function() {
    var data = [
                  {
                      value: 300,
                      color:"#333",
                      highlight: "#666",
                      label: "Internships"
                  },
                  {
                      value: 50,
                      color: "#333",
                      highlight: "#666",
                      label: "Exchange"
                  },
                  {
                      value: 100,
                      color: "#333",
                      highlight: "#666",
                      label: "CCAs"
                  }
              ];
    var options = {};
    var ctx = $("#opportunitiesChart").get(0).getContext("2d");
    var opportunitiesChart = new Chart(ctx).Pie(data,options);
  }
}
})();
