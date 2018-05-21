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
  .directive('pdPost', ['$timeout', function($timeout) {
    return {
      restrict: 'AEC',
      templateUrl: 'views/postContent.html',
      link: function(scope, el, attrs){
        // Typeset any math
        $timeout(function() {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub])
        }, 2000)

        el.on('click', '.delete', function(ev){
          ev.preventDefault();
          scope.delete(scope.post);
        });
      }
    }
  }]);
