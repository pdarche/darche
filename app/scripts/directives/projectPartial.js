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
  .directive('pdProjectPartial', function(){
    return {
      restrict: 'AEC',
      templateUrl: 'views/partials/project.html',
      link: function(scope, el, attrs){
        var video = el.find('video').first();
        var source = el.find('video source').first();
        window.video = video

        video.attr('poster', scope.project.imageUrl);
        video.on('loadeddata', function(){
          el.removeClass('opaque');
        })
        source.attr('src', scope.project.gfycat);
        video.play();

        el.on('click', '.delete', function(ev){
          ev.preventDefault();
          scope.delete(scope.project);
        });
      }
    }
  });
