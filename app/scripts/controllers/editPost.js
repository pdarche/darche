'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditCtrl
 * @description
 * # EditPostCtrl
 * Controller
 */

angular.module('darcheApp')
  .controller('EditPostCtrl', ['$scope', '$routeParams', '$http', 'Post', 'Scopes', function ($scope, $routeParams, $http, Post, Scopes) {
    $scope.post = Post.get({id: $routeParams.id});

    $scope.submit = function() {
      var updateTime = new Date().getTime();
      $scope.post.updates.push(updateTime);
      $scope.post.lastUpdated = updateTime;

      Post.update({id: $scope.post._id}, $scope.post, function(data) {
        alert('Saved succesfully');
        $scope.post._rev = data.rev;
      }, function(err) {
        alert("Error!");
      });
    }

    $scope.delete = function(post) {
      if (confirm("Are you sure you want to delete this post?")){
        Post.remove({id: post._id, rev: post._rev}, function(success){
          // add successful delete notification
        }, function(err){
          alert('Sorry, something went wrong!');
        });
      }
    }
  }]);
