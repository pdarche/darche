'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('PostCtrl', ['$scope', '$routeParams', '$http', '$timeout', 'Post', function ($scope, $routeParams, $http, $timeout, Post) {
    var startTime = new Date();
    Post.findOne({selector: {slug: $routeParams.slug}}, function(post) {
      var loadedTime = new Date();
      var timediff = loadedTime - startTime;
      var timeout  = timediff < 2000 ? 2000 - timediff : 0
      $timeout(function() {
        $scope.$broadcast('contentLoaded')
        $scope.post = post
      }, timeout)
    });
  }]);
