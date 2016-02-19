'use strict';

(function() {

angular.module('app')
  .controller('UniversityOverviewController', ['$stateParams', '$timeout', UniversityOverviewController]);

function UniversityOverviewController($stateParams, $timeout) {
  this.photos = [{ url: '/assets/images/nus-1.jpg'},
                { url: '/assets/images/nus-2.jpg'},
                { url: '/assets/images/nus-3.jpg'},
                { url: '/assets/images/nus-4.jpg'},
                { url: '/assets/images/nus-5.jpg'}];
}

})();