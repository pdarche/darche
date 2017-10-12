'use strict';

/**
 * @ngdoc auth-interceptor factor
 * @name
 * @description
 * # darcheApp
 *
 */

angular.module('darcheApp')
 .factory('AuthInterceptor', function ($rootScope, $q, $window, $location) {
  return {
    request: function (request) {
      var protectedRoutes = /new|edit|drafts/g;
      if ($window.sessionStorage.token && !$rootScope.loggedIn){
        $rootScope.loggedIn = true;
      }
      if (!$window.sessionStorage.token && $location.path().search(protectedRoutes) !== -1) {
        $location.path('/');
      }

      return request;
    },
    responseError: function(rejection) {
      // if we're not logged-in to the web service, redirect to login page
      if (rejection.status === 401 && $location.path() != '/login') {
        $rootScope.loggedIn = false;
        $location.path('/login');
      }
      return $q.reject(rejection);
    }
  };
});