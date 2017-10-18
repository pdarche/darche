'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('BlogCtrl', ['$scope', '$http', 'Post', function ($scope, $http, Post) {
    var posts = Post.query({publish:true}, function(){
      // I want this to be intercepted!
      $scope.posts = posts.rows.map(function(row){ return row.doc; })
                        .filter(function(doc){ return doc.publish === true; });

      $scope.delete = function(post) {
        if (confirm("Are you sure you want to delete this project?")){
          Post.remove({id: post._id, rev: post._rev}, function(success){
            _.remove($scope.posts, post)
          }, function(err){
            alert('Sorry, something went wrong!');
          });
        }
      }
    });
  }]);
