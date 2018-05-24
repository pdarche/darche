'use strict';

/**
 * @ngdoc project directive
 * @name
 * @description
 * # darcheApp
 *
 *
 */

angular
  .module('pdDirectives')
  .directive('pdProject', ['$timeout', function($timeout) {
    return {
      restrict: 'AEC',
      templateUrl: 'views/projectContent.html',
      link: function(scope, el, attrs) {
        // Typeset any math
        $timeout(function() {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub])
        }, 2000)

        el.on('click', '.delete', function(ev){
          ev.preventDefault();
          scope.delete(scope.project);
        });
      }
    }
  }]);
