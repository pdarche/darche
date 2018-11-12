'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('BlogCtrl', ['$scope', '$http','$timeout' ,'Post', function ($scope, $http, $timeout, Post) {
    var startTime = new Date();
    var posts = Post.query({publish:true}, function(res){
      var loadedTime = new Date();
      var timediff = loadedTime - startTime;
      var timeout  = timediff < 1500 ? 1500 - timediff : 0
      $timeout(function() {
        $scope.$broadcast('contentLoaded')
        $scope.posts = res.data.filter(function(doc){ return doc.publish; });
        $scope.delete = function(post) {
          if (confirm("Are you sure you want to delete this project?")){
            Post.remove({id: post._id, rev: post._rev}, function(success){
              _.remove($scope.posts, post)
            }, function(err){
              alert('Sorry, something went wrong!');
            });
          }
        }
      }, timeout)
    });
  }]);
