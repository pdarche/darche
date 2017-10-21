'use strict';

/**
 * @ngdoc loading directive
 * @name
 * @description
 * # darcheApp
 *
 *
 */

angular
  .module('pdDirectives')
  .directive('pdProjectPlaceholder', function($rootScope, $timeout){
    return {
      restrict: 'AEC',
      templateUrl: 'views/partials/project-placeholder.html',
      link: function(scope, element) {
        scope.$on('contentLoaded', function() {
          element.addClass('ng-hide');
        });
      }
    }
  });
