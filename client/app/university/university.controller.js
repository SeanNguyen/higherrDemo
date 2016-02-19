'use strict';

(function() {

angular.module('app')
  .controller('UniversityController', ['$stateParams', '$timeout', '$state', UniversityController]);

function UniversityController($stateParams, $timeout, $state) {
  this.universities = [{ name: 'University of Hong Kong ', photoUrl: '/assets/images/logo-hku.jpg', rating: 4 },
                      { name: 'Nanyang Technological University', photoUrl: '/assets/images/logo-ntu.jpg', rating: 3 },
                      { name: 'Singapore Management University', photoUrl: '/assets/images/logo-smu.jpg', rating: 5 },]
  this.init = function() {
  }

  this.id = $stateParams.id;

  this.isAtState = function(stateName) {
    if($state.current.name.indexOf(stateName) > -1)
      return true;
    return false;
  }
}
})();
