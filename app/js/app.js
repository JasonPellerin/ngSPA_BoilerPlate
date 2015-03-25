'use strict';

// Declare app level module which depends on views, and components
angular.module('spaApp', [
  'ngRoute',
  'spaApp.home',
  'spaApp.about',
  'spaApp.contact',
  'ui.bootstrap',
  'ngAnimate'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
