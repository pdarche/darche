'use strict';

/**
 * @ngdoc post directive
 * @name
 * @description
 * # darcheApp
 *
 */

angular
  .module('pdDirectives')
  .directive('pdPost', function(){
    return {
      restrict: 'AEC',
      templateUrl: 'views/partials/post.html',
      link: function(scope, el, attrs){
        el.on('click', '.delete', function(ev){
          ev.preventDefault();
          scope.delete(scope.post);
        });
      }
    }
  });