'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('ProjectsCtrl', ['$scope', '$http', '$timeout', 'Project', function ($scope, $http, $timeout, Project) {
    var startTime = new Date();
    var projects = Project.query({publish: true}, function() {
      var loadedTime = new Date();
      var timediff = loadedTime - startTime;
      var timeout  = timediff < 1500 ? 1500 - timediff : 0
      $timeout(function() {
        $scope.$broadcast('contentLoaded')
        // I want this to be intercepted!
        $scope.projects = projects.rows.map(function(row){ return row.doc; })
                            .filter(function(doc){ return doc.publish === true; });

        $scope.delete = function(project) {
          if (confirm("Are you sure you want to delete this project?")){
            Project.remove({id: project._id, rev: project._rev}, function(success){
              _.remove($scope.projects, project);
            }, function(err){
              alert("Sorry, couldn't delete the post!");
            });
          }
        } 
      }, timeout) 
    });
  }]);
