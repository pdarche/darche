'use strict';

/**
 * @ngdoc function
 * @name darcheApp.factory:Post
 * @description
 * # Post Factory
 * Factory for Blog Posts
 */

angular.module('darcheApp')
  .factory('Post', ['$resource', function ($resource) {
    return $resource('https://darche.me/couchdb/posts/:id', {id: '@_id'}, {
      save: {
        method: 'POST',
        withCredentials: true
      },
      update: {
        method: 'PUT',
        withCredentials: true
      },
      findOne: {
        method: 'POST',
        url: 'https://darche.me/couchdb/posts/_find',
        headers: {'Content-Type':'application/json'},
        interceptor: {
          response: function(res) {
            var post = res.data.docs[0]
            return post
          }
        }
      },
      query: {
        method: 'GET',
        params: {include_docs: true},
        url: 'https://darche.me/couchdb/posts/_all_docs',
        headers: {'Content-Type':'text/plain'},
        withCredentials: true,
        interceptor: {
          response: function(res){
            res.data = res.data.rows.map(function(row){ return row.doc; });
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
