'use strict';

/**
 * @ngdoc edit post directive
 * @name
 * @description
 * # darcheApp
 *
 */

angular
  .module('pdDirectives')
  .directive('pdEditPost', ['$window', 'Post', function ($window, Post){
    return {
      restrict: 'AEC',
      templateUrl: 'views/partials/editPost.html',
      link: function(scope, el, attrs){
        el.on('click', '.editor-save', function(ev){
          ev.preventDefault();

          el.find('.editor-save__icon').css({'background-image':'url("/images/ripple.gif")'});

          var updateTime = new Date().getTime();
          scope.post.updates.push(updateTime);
          scope.post.lastUpdated = updateTime;

          Post.update({id: scope.post._id}, scope.post, function(data){
              scope.post._rev = data.rev;
              el.find('.editor-save__icon').css({'background-image':''});
            }, function(err){
              el.find('.editor-save__icon').css({'background-image':''});
              alert("Error!");
            });
        });

        el.on('click', '#preview', function(ev){
          ev.preventDefault();

          var updateTime = new Date().getTime();
          scope.post.updates.push(updateTime);
          scope.post.lastUpdated = updateTime;

          Post.update({id: scope.post._id}, scope.post, function(data){
              scope.post._rev = data.rev;
              $window.location.href = '/#/blog/' + scope.post._id;
            }, function(err){
              alert("Error!");
          });
        });
      }
    }
  }]);