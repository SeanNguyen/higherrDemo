'use strict';

function NavbarController($location) {
  this.isActive = function(tabIndex) {
    var url = $location.url();
    switch(tabIndex) {
      case 0:
        if(url.indexOf('universities') === 1)
          return true;
        break;
      case 1:
        if(url.indexOf('applications') === 1)
          return true;
        break;
      case 2:
        if(url.indexOf('lifeandprograms') === 1)
          return true;
        break;
      case 3:
        if(url.indexOf('schoolarships') === 1)
          return true;
        break;
    }
    return false;
  }

  this.collapsedMenuVisibility = false;

  this.toggleCollapsedMenu = function() {
    this.collapsedMenuVisibility = !this.collapsedMenuVisibility;
  }
}

angular.module('app')
  .controller('NavbarController', ['$location', NavbarController]);
