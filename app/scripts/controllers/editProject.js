'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditProjectCtrl
 * @description
 * # EditProjectCtrl
 * Controller
 */

angular.module('darcheApp')
  .controller('EditProjectCtrl', ['$scope', '$routeParams', '$http', 'Project', function ($scope, $routeParams, $http, Project) {
    Project.findOne({selector: {slug: $routeParams.slug}}, function(project) {
      $scope.project = project;
      $scope.submit = function() {
        var updateTime = new Date().getTime();
        $scope.project.updates.push(updateTime);
        $scope.project.lastUpdated = updateTime;

        Project.update({id: $scope.project._id}, $scope.project, function(data) {
          alert("Saved successfully");
          $scope.project._rev = data.rev;
        }, function(err) {
          alert("Error!");
        });
      }

      $scope.delete = function(project) {
        if (confirm("Are you sure you want to delete this project?")){
          Project.remove({id: project._id, rev: project._rev}, function(success){
          // add successful delete notification
          }, function(err){
            alert('Sorry, something went wrong!');
          });
        }
      }
    });
  }]);
