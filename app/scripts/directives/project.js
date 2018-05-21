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
  .directive('pdProject', ['$timeout', function($timeout) {
    return {
      restrict: 'AEC',
      templateUrl: 'views/projectContent.html',
      link: function(scope, el, attrs) {
        var video = el.find('video').first();
        var source = el.find('video source').first();

        // Unhide the content
        el.removeClass('ng-hide');

        // Typeset any math
        $timeout(function() {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub])
        }, 2000)

        // Set the video attributes
        video.attr('poster', scope.project.imageUrl);
        video.hide().on('loadeddata', function(){
          video.fadeIn('slow');
        })
        source.attr('src', scope.project.gfycat);

        // Bind the events
        el.on('mouseover', '.project-partial__image', function(ev){
          ev.target.play();
        });

        el.on('mouseout', '.project-partial__image', function(ev){
          ev.target.pause();
        });

        el.on('click', '.delete', function(ev){
          ev.preventDefault();
          scope.delete(scope.project);
        });
      }
    }
  }]);
