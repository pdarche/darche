'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:DraftPostCtrl
 * @description
 * # DraftPostCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('DraftPostCtrl', ['$scope', '$http', 'Post', function($scope, $http, Post) {
    var posts = Post.query({publish: false}, function(res){
      $scope.$broadcast('contentLoaded')
      $scope.posts = res.data.filter(function(doc){ return !doc.publish; });

      $scope.delete = function(post) {
        if (confirm("Are you sure you want to delete this project?")){
          Post.remove({id: post._id, rev: post._rev}, function(success){
            _.remove($scope.posts, post);
          }, function(err){
            alert('Sorry, something went wrong!');
          });
        }
      }
    });
  }]);
