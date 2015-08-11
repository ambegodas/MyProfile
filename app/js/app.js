'use strict';

// Declare app level module which depends on views, and components
var mainModule = angular.module('myApp', [
  'ngRoute',
  'javaModule',
  'javaEEModule',
  'myApp.version'
]) ;

mainModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
