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

  this.searchTextUniversity = '';
  this.searchTextLocation = '';

  this.universities = ['National University of Singapore', 
                      'Nanyang Technological University', 
                      'Singapore Management University', 
                      'Singapore University of Technology and Design',
                      'Singapore Institute of Technology',
                      'SIM University']
  this.locations = ['Serbia',
                    'Seychelles',
                    'Sierra Leone',
                    'Singapore',
                    'Slovakia',
                    'Slovenia',
                    'Solomon Islands',
                    'Somalia',
                    'South Africa']

  this.queryUnivesity = function(query) {
    query = query.toLowerCase();
    var results = [];
    for (var i = 0; i < this.universities.length; i++) {
      var name = this.universities[i].toLowerCase();
      if(name.indexOf(query) > -1)
        results.push(this.universities[i]);
    }
    return results;
  }

  this.queryLocations = function(query) {
    query = query.toLowerCase();
    var results = [];
    for (var i = 0; i < this.locations.length; i++) {
      var name = this.locations[i].toLowerCase();
      if(name.indexOf(query) > -1)
        results.push(this.locations[i]);
    }
    return results;
  }
}

angular.module('app')
  .controller('MainController', ['$stateParams', MainController]);

})();
