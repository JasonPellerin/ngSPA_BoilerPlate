'use strict';

angular.module('spaApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope) {
        $scope.pageClass = 'home';
});