'use strict';

function SecondaryNavbarController($timeout) {
  var self = this;
  this.isSearchOn = false;
  this.disableTurnOff = false;

  this.turnOn = function() {
    this.isSearchOn = true; 
    this.disableTurnOff = true;
    $timeout(function() {
      self.disableTurnOff = false;
    }, 100)
  }

  this.turnOff = function() {
    this.isSearchOn = false;
  }
}

angular.module('app')
  .controller('SecondaryNavbarController', ['$timeout', SecondaryNavbarController]);
