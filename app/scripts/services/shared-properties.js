'use strict';

/**
 * @ngdoc shared-properties factory
 * @name
 * @description
 * darcheApp
 *
 */

angular.module('darcheApp')
  .factory('Scopes', ['$rootScope', function($rootScope) {
    var mem = {};

    return {
      store: function (key, value) {
        mem[key] = value;
      },
      get: function (key) {
        return mem[key];
      }
    };
  }]);
