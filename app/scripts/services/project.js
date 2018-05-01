'use strict';

/**
 * @ngdoc function
 * @name darcheApp.factory:Post
 * @description
 * # Post Factory
 * Factory for Blog Posts
 */

angular.module('darcheApp')
  .factory('Project', ['$resource', function($resource) {
    return $resource('https://peterdarche.com:5984/projects/:id', {id: '@_id'}, {
      save: {
        method: 'POST',
        withCredentials: true
      },
      update: {
        method: 'PUT',
        withCredentials: true
      },
      query: {
        method: 'GET',
        params: {include_docs: true},
        url: 'https://peterdarche.com:5984/projects/_all_docs',
        headers: {'Content-Type':'text/plain'},
        withCredentials: true,
        interceptor: {
          response: function(res){
            res.data = res.data.rows.filter(function(row){ return row.doc; });
            return res;
          }
        }
      },
      remove: {
        method: 'DELETE',
        withCredentials: true
      }
    });
  }]);
