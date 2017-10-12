'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:DraftPostCtrl
 * @description
 * # DraftProjectCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('DraftProjectCtrl', ['$scope', '$http', 'Project', function ($scope, $http, Project) {
    var projects = Project.query({publish:true}, function(){
      // REFACTOR: this should be done by a couch view
      $scope.projects = projects.rows.map(function(row){ return row.doc; })
                          .filter(function(doc){ return doc.publish === false; });

      $scope.delete = function(project) {
        if (confirm("Are you sure you want to delete this project?")){
          Project.remove({id: project._id, rev: project._rev}, function(success){
            _.remove($scope.projects, project);
          }, function(err){
            alert('Sorry, something went wrong!');
          });
        }
      }
    });
  }]);