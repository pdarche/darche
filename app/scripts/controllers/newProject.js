'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:NewProjectCtrl
 * @description
 * # NewProjectCtrl
 * Controller
 */

angular.module('darcheApp')
  .controller('NewProjectCtrl', ['$scope', '$routeParams', '$http', '$window', 'Project', function ($scope, $routeParams, $http, $window, Project) {
    var projectConfig = {
      title: null,
      description: null,
      body: null,
      tags: [],
      updates: [],
      lastUpdated: null,
      timestamp: new Date().getTime(),
      publish: false
    };
    $scope.project = new Project(projectConfig);

    Project.save($scope.project, function(data){
      $scope.project._id = data.id;
      $scope.project._rev = data.rev;
      $window.location.href = '/#/projects/edit/' + data.id;
    });
  }]);