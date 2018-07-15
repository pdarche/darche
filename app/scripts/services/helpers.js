'use strict';

/**
 * @ngdoc function
 * @name darcheApp.factory:Utils
 * @description
 * # Utility functions
 *
 */

angular
  .module('darcheApp')
  .factory('Utils', [function() {
    return {
      slugify: function(string) {
        return string.toLowerCase()
          .replace(/-+/g, '')
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '');
      }
    };
  }]);
