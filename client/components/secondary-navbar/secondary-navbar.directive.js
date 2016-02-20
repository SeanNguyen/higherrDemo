'use strict';

angular.module('app')
  .directive('secondaryNavbar', () => ({
    templateUrl: 'components/secondary-navbar/secondary-navbar.html',
    restrict: 'E',
    controller: 'SecondaryNavbarController',
    controllerAs: 'secNav'
  }));
