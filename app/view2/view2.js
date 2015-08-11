'use strict';

var javaEEModule = angular.module('javaEEModule', ['ngRoute']) ;

javaEEModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/javaee', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]) ;

javaEEModule.controller('View2Ctrl', [function() {

}]);