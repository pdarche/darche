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
      publish: false,
      slug: "temp-" + Math.floor(Math.random() * 1000000000)
    };
    $scope.project = new Project(projectConfig);

    Project.save($scope.project, function(data){
      $scope.project._id = data.id;
      $scope.project._rev = data.rev;
      $window.location.href = '/#/projects/edit/' + projectConfig.slug;
    });
  }]);
