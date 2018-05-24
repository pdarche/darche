'use strict';

/**
 * @ngdoc overview
 * @name darcheApp
 * @description
 * # darcheApp
 *
 * Main module of the application.
 */

angular
  .module('darcheApp', [
    'http-auth-interceptor',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pdDirectives',
    'login',
    'logout',
    'hc.marked',
    'angular-p5'
  ])
  .config(['markedProvider', function(markedProvider) {
      markedProvider.setOptions({
        gfm: true,
        tables: true,
        highlight: function (code, lang) {
          return hljs.highlight('python', code, true).value;
        }
      });
    }])
  .config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
    $httpProvider.interceptors.push('HomeInterceptor');
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/blog/edit/:id',{
        templateUrl: 'views/editPost.html',
        controller: 'EditPostCtrl'
      })
      .when('/blog/new/post',{
        templateUrl: 'views/editPost.html',
        controller: 'NewPostCtrl'
      })
      .when('/drafts/blog',{
        templateUrl: 'views/blog.html',
        controller: 'DraftPostCtrl'
      })
      .when('/projects',{
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:id', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/projects/edit/:id',{
        templateUrl: 'views/editProject.html',
        controller: 'EditProjectCtrl'
      })
      .when('/projects/new/project',{
        templateUrl: 'views/editProject.html',
        controller: 'NewProjectCtrl'
      })
      .when('/drafts/projects',{
        templateUrl: 'views/projects.html',
        controller: 'DraftProjectCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
