'use strict';

(function() {

function MainController($stateParams) {
  this.currentTab = 0;
  switch($stateParams.search) {
    case 'universities':
      this.currentTab = 0;
      break;
    case 'applications':
      this.currentTab = 1;
      break;
    case 'lifeandprograms':
      this.currentTab = 2;
      break;
    case 'schoolarships':
      this.currentTab = 3;
      break;
  }
}

angular.module('app')
  .controller('MainController', ['$stateParams', MainController]);

})();
