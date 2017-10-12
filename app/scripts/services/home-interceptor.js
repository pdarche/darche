'use strict';

/**
 * @ngdoc home interceptor
 * @name
 * @description
 * # darcheApp
 *
 */

angular.module('darcheApp')
 .factory('HomeInterceptor', function ($rootScope, $q, $window, $location) {
  return {
    request: function (request) {
      if ($location.path() == '/'){
        $rootScope.$broadcast('home');
      } else {
        $rootScope.$broadcast('not-home');
      }

      return request;
    },
    responseError: function(rejection) {
      return $q.reject(rejection);
    }
  };
});