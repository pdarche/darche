'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('ProjectCtrl', ['$scope', '$routeParams', '$http', '$timeout', 'Project', function ($scope, $routeParams, $http, $timeout, Project) {
    var startTime = new Date();
    var project = Project.get({id: $routeParams.id}, function() {
      var loadedTime = new Date();
      var timediff = loadedTime - startTime;
      var timeout  = timediff < 1500 ? 1500 - timediff : 0
      $timeout(function() {
        $scope.$broadcast('contentLoaded') 
        $scope.project = project
      }, timeout)
    });
  }]);
